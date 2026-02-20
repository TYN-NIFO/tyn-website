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
    impact?: PortableTextBlock[] | string; // block array or plain string (old CMS)
    testimonials?: string[];
    competitorPositioning?: string;
    expertsTake?: string;
    enterpriseName?: string; // singular, from old YnsightDetail
    enterpriseOneName?: string;
    enterpriseOneImage?: string;
    enterpriseOneImageUrl?: string; // list query
    enterpriseTwoName?: string;
    enterpriseTwoImage?: string;
    enterpriseTwoImageUrl?: string; // list query
    solutionProviderName?: string;
    solutionProviderImage?: string; // detail
    solutionProviderImageUrl?: string; // list query
    imageUrl?: string; // detail thumbnail
    thumbnailUrl?: string; // list query
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
