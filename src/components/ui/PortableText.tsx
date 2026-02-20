import { PortableText as PortableTextReact, PortableTextComponents } from '@portabletext/react';
import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from '@/lib/sanity/image';

const components: PortableTextComponents = {
    types: {
        image: ({ value }: any) => {
            const imageUrl = urlForImage(value)?.url();
            if (!imageUrl) return null;
            return (
                <div className="relative w-full h-96 my-8 rounded-lg overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={value.alt || 'Blog Image'}
                        fill
                        className="object-cover"
                    />
                </div>
            );
        },
    },
    block: {
        h1: ({ children }: any) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>,
        h4: ({ children }: any) => <h4 className="text-xl font-bold mt-4 mb-2">{children}</h4>,
        normal: ({ children }: any) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-gray-600 bg-gray-50 py-2 pr-4 rounded-r">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">{children}</ul>,
        number: ({ children }: any) => <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }: any) => <li>{children}</li>,
        number: ({ children }: any) => <li>{children}</li>,
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
            const target = !value.href.startsWith('/') ? '_blank' : undefined;
            return (
                <Link
                    href={value.href}
                    rel={rel}
                    target={target}
                    className="text-blue-600 hover:text-blue-800 underline transition-colors"
                >
                    {children}
                </Link>
            );
        },
        strong: ({ children }: any) => <strong className="font-bold text-gray-900">{children}</strong>,
    },
};

export const PortableText = ({ value }: { value: any }) => {
    return <PortableTextReact value={value} components={components} />;
};
