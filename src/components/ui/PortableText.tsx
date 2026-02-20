import { PortableText as PortableTextReact, PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { SanityImageSource } from '@sanity/image-url';
import { urlForImage } from '@/lib/sanity/image';

type RichTextValue = PortableTextBlock[];
type LinkMarkValue = { href?: string };
type ImageValue = SanityImageSource & { alt?: string };

type ChildrenProps = { children?: ReactNode };

type LinkMarkProps = ChildrenProps & {
    value?: LinkMarkValue;
};

const components: PortableTextComponents = {
    types: {
        image: ({ value }) => {
            const imageValue = value as ImageValue;
            const imageUrl = urlForImage(imageValue)?.url();
            if (!imageUrl) return null;
            return (
                <div className="relative w-full h-96 my-8 rounded-lg overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={imageValue.alt || 'Blog Image'}
                        fill
                        className="object-cover"
                    />
                </div>
            );
        },
    },
    block: {
        h1: ({ children }: ChildrenProps) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
        h2: ({ children }: ChildrenProps) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
        h3: ({ children }: ChildrenProps) => <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>,
        h4: ({ children }: ChildrenProps) => <h4 className="text-xl font-bold mt-4 mb-2">{children}</h4>,
        normal: ({ children }: ChildrenProps) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
        blockquote: ({ children }: ChildrenProps) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-gray-600 bg-gray-50 py-2 pr-4 rounded-r">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: ChildrenProps) => <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">{children}</ul>,
        number: ({ children }: ChildrenProps) => <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }: ChildrenProps) => <li>{children}</li>,
        number: ({ children }: ChildrenProps) => <li>{children}</li>,
    },
    marks: {
        link: ({ children, value }: LinkMarkProps) => {
            const href = value?.href || '#';
            const isInternal = href.startsWith('/');
            const rel = isInternal ? undefined : 'noreferrer noopener';
            const target = isInternal ? undefined : '_blank';
            return (
                <Link
                    href={href}
                    rel={rel}
                    target={target}
                    className="text-blue-600 hover:text-blue-800 underline transition-colors"
                >
                    {children}
                </Link>
            );
        },
        strong: ({ children }: ChildrenProps) => <strong className="font-bold text-gray-900">{children}</strong>,
    },
};

export const PortableText = ({ value }: { value: RichTextValue }) => {
    return <PortableTextReact value={value} components={components} />;
};
