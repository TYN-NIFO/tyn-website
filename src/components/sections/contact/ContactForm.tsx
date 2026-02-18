'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const contactSchema = z.object({
  fullName: z.string().trim().min(1, 'Full name is required').max(100, 'Max 100 characters'),
  designation: z.string().trim().min(1, 'Designation is required').max(100, 'Max 100 characters'),
  company: z.string().trim().min(1, 'Company name is required').max(200, 'Max 200 characters'),
  email: z.string().trim().email('Please enter a valid email').max(255, 'Max 255 characters'),
  query: z.string().trim().min(1, 'Please tell us about your requirement').max(2000, 'Max 2000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const getDeviceType = (): string => {
  const ua = navigator.userAgent;
  if (/tablet|ipad|playbook|silk/i.test(ua)) return 'Tablet';
  if (/mobile|iphone|ipod|android|blackberry|opera mini|iemobile/i.test(ua)) return 'Mobile';
  return 'Desktop';
};

export const ContactForm = () => {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const sourcePage = searchParams.get('source_page') || 'General';
  const ctaLabel = searchParams.get('cta')?.replace(/-/g, ' ') || 'Direct';

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    // Honeypot check — silent reject
    if (honeypot) {
      setSubmitted(true);
      return;
    }

    const submission = {
      ...data,
      metadata: {
        source_page: sourcePage,
        cta: ctaLabel,
        page_url: window.location.href,
        timestamp: new Date().toISOString(),
        device_type: getDeviceType(),
        referrer: document.referrer || 'Direct',
      },
    };

    // TODO: Replace with backend API call (Supabase edge function / email service)
    console.log('[Contact Submission]', JSON.stringify(submission, null, 2));
    toast.success('Message sent successfully');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 animate-fade-up">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-accent" />
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Thank you.
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Our team will get back to you shortly.
        </p>
        <a href="/">
          <Button className="btn-hero">Return to homepage</Button>
        </a>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
      {/* Left column */}
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
          Let's connect
        </h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-md">
          Tell us about your requirement. We'll reach out shortly.
        </p>

        <div className="space-y-5">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Shield className="w-5 h-5 text-accent flex-shrink-0" />
            <span className="text-sm">Enterprise-grade confidentiality</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Clock className="w-5 h-5 text-accent flex-shrink-0" />
            <span className="text-sm">Typically respond within 24 hours</span>
          </div>
        </div>
      </div>

      {/* Right column — form */}
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot — invisible to users */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="absolute opacity-0 pointer-events-none h-0 w-0"
            aria-hidden="true"
          />

          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="Your full name"
              {...register('fullName')}
              className="focus-visible:ring-accent"
            />
            {errors.fullName && (
              <p className="text-sm text-destructive">{errors.fullName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="designation">Designation</Label>
            <Input
              id="designation"
              placeholder="Your role or title"
              {...register('designation')}
              className="focus-visible:ring-accent"
            />
            {errors.designation && (
              <p className="text-sm text-destructive">{errors.designation.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              placeholder="Your organisation"
              {...register('company')}
              className="focus-visible:ring-accent"
            />
            {errors.company && (
              <p className="text-sm text-destructive">{errors.company.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Work Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              {...register('email')}
              className="focus-visible:ring-accent"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="query">Query / Message</Label>
            <Textarea
              id="query"
              placeholder="Tell us about your requirement..."
              rows={5}
              {...register('query')}
              className="focus-visible:ring-accent resize-none"
            />
            {errors.query && (
              <p className="text-sm text-destructive">{errors.query.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="btn-hero w-full group"
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
            {!isSubmitting && (
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};
