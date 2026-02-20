import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

// Generate a unique ID like TYN-1708453210123-A4F
function generateSubmissionId(): string {
    const timestamp = Date.now();
    const randomSuffix = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `TYN-${timestamp}-${randomSuffix}`;
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { fullName, designation, company, email, query, metadata } = data;

        // Validate derived fields
        const sourcePage = metadata?.source_page || 'unknown';
        const ctaLabel = metadata?.cta || 'unknown';
        const timestamp = new Date().toISOString();
        const submissionId = generateSubmissionId();

        // 1. Write to Google Sheets
        // Expected Columns: [Timestamp, Submission ID, Full Name, Designation, Company Name, Work Email, Query / Message, Source Page, CTA Label]
        const rowData = [
            timestamp,
            submissionId,
            fullName || '',
            designation || '',
            company || '',
            email || '',
            query || '',
            sourcePage,
            ctaLabel
        ];

        console.log('--- CONTACT FORM SUBMISSION PAYLOAD ---');
        console.log(JSON.stringify({
            submissionId, timestamp, fullName, designation, company, email, query, sourcePage, ctaLabel
        }, null, 2));

        try {
            if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
                throw new Error('Missing Google Service Account credentials in environment (GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY).');
            }

            // Handle properly formatted private keys (replace literal \n if passed directly)
            const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

            const auth = new google.auth.GoogleAuth({
                credentials: {
                    client_email: process.env.GOOGLE_CLIENT_EMAIL,
                    private_key: privateKey,
                },
                scopes: ['https://www.googleapis.com/auth/spreadsheets'],
            });

            console.log('Authenticating with Google Sheets API...');
            const sheets = google.sheets({ version: 'v4', auth });
            const spreadsheetId = '1wIgYjTjPblQorE9FsMunP4FPAOlMf6itY-eOkyVVyhA';

            console.log('Sending request to append row to Google Sheet (1wIgYjTj...)...');
            const sheetRequest = {
                spreadsheetId,
                range: 'Sheet1!A:I', // Append anywhere in columns A to I
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [rowData],
                },
            };
            console.log('Google Sheets API Request Body:', JSON.stringify(sheetRequest, null, 2));

            const sheetResponse = await sheets.spreadsheets.values.append(sheetRequest);
            console.log('Google Sheets API Response:', JSON.stringify(sheetResponse.data, null, 2));

        } catch (sheetError: any) {
            console.error('Google Sheets Error:', sheetError);
            throw new Error(`Google Sheets integration failed: ${sheetError.message}`);
        }

        // 2. Send Notification Email
        console.log('Preparing to send email notification...');
        try {
            if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
                throw new Error('Missing SMTP credentials in environment (SMTP_HOST, SMTP_USER, SMTP_PASS).');
            }

            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: parseInt(process.env.SMTP_PORT || '587', 10),
                secure: process.env.SMTP_PORT === '465',
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });

            const mailOptions = {
                from: process.env.SMTP_USER,
                to: 'Innovation@theyellow.network',
                subject: `New Contact Submission [${submissionId}] from ${fullName}`,
                html: `
            <h2>New Contact Us Submission</h2>
            <p>A new query has been submitted via the TYN website.</p>
            <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%; max-width: 600px;">
              <tr><th align="left">Submission ID</th><td>${submissionId}</td></tr>
              <tr><th align="left">Timestamp</th><td>${timestamp}</td></tr>
              <tr><th align="left">Source Page</th><td>${sourcePage}</td></tr>
              <tr><th align="left">CTA Label</th><td>${ctaLabel}</td></tr>
              <tr><th align="left">Full Name</th><td>${fullName}</td></tr>
              <tr><th align="left">Designation</th><td>${designation}</td></tr>
              <tr><th align="left">Company Name</th><td>${company}</td></tr>
              <tr><th align="left">Work Email</th><td>${email}</td></tr>
              <tr><th align="left">Query / Message</th><td>${query}</td></tr>
            </table>
          `,
            };

            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent successfully. Response:', info.response);
        } catch (emailError: any) {
            console.error('Email Sending Error:', emailError);
            throw new Error(`Email notification failed: ${emailError.message}`);
        }

        return NextResponse.json({ success: true, submissionId });
    } catch (error: any) {
        console.error('Contact Form Processing Error:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Failed to process submission' },
            { status: 500 }
        );
    }
}
