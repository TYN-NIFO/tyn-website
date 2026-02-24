"use client";

import { Download, Share2 } from "lucide-react";

interface WhitepaperActionsProps {
    title: string;
    fileUrl: string;
}

export function WhitepaperActions({ title, fileUrl }: WhitepaperActionsProps) {
    const handleShare = () => {
        if (typeof navigator !== "undefined" && navigator.share) {
            navigator.share({
                title,
                url: typeof window !== "undefined" ? window.location.href : "",
            }).catch(console.error);
        } else {
            if (typeof window !== "undefined") {
                navigator.clipboard?.writeText(window.location.href);
                alert("Link copied to clipboard.");
            }
        }
    };

    return (
        <div className="flex items-center gap-4">
            <button
                type="button"
                onClick={handleShare}
                className="text-muted-foreground hover:text-tyn-blue transition-colors p-2 rounded-lg hover:bg-muted"
                aria-label="Share this whitepaper"
            >
                <Share2 className="w-4 h-4" />
            </button>
            {fileUrl && (
                <a
                    href={encodeURI(fileUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="text-muted-foreground hover:text-tyn-blue transition-colors p-2 rounded-lg hover:bg-muted"
                    aria-label="Download this whitepaper as PDF"
                >
                    <Download className="w-4 h-4" />
                </a>
            )}
        </div>
    );
}
