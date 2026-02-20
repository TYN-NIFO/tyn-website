import { PortableTextBlock } from "sanity";

export interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

export interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface Blog extends SanityBody {
    _type: "blog";
    title: string;
    slug: {
        current: string;
    };
    author: string;
    authorTitle?: string;
    authorImageUrl?: string;
    publishedAt: string;
    excerpt: string;
    content: PortableTextBlock[];
    featuredImageUrl?: string;
    readTime?: number;
    tags?: string[];
}

export interface Whitepaper extends SanityBody {
    _type: "whitepaper";
    title: string;
    description: string;
    fileUrl: string;
}

export interface Ynsight extends SanityBody {
    _type: "ynsight";
    title: string;
    slug: {
        current: string;
    };
    industry?: string;
    usecaseDescription?: string;
    problemStatement?: string;
    solution?: string;
    impact?: PortableTextBlock[];
    testimonials?: string[];
    competitorPositioning?: string;
    enterpriseOneName?: string;
    enterpriseOneImage?: string; // mapped from asset->url
    enterpriseTwoName?: string;
    enterpriseTwoImage?: string; // mapped from asset->url
    solutionProviderName?: string;
    solutionProviderImage?: string; // mapped from asset->url
    imageUrl?: string; // mapped from asset->url
}

export interface OpenPosition extends SanityBody {
    _type: "openPosition";
    title: string;
    slug: {
        current: string;
    };
    department: string;
    location: string;
    employmentType: string;
    experience: string;
    description: PortableTextBlock[];
    responsibilities: PortableTextBlock[];
    requirements: PortableTextBlock[];
    isActive: boolean;
    postedAt: string;
}
