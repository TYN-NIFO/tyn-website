import { groq } from "next-sanity";

// Blog Queries (aligned with old website sanity retrieval)
export const GET_BLOGS = groq`*[_type == "blog" && isPublished == true] | order(publishedAt desc){
  _id,
  title,
  slug,
  author,
  authorTitle,
  "authorImageUrl": authorImage.asset->url,
  publishedAt,
  excerpt,
  "featuredImageUrl": featuredImage.asset->url,
  readTime,
  tags
}`;

export const GET_BLOG_BY_SLUG = groq`*[_type == "blog" && slug.current == $slug && isPublished == true][0]{
  _id,
  title,
  slug,
  author,
  authorTitle,
  "authorImageUrl": authorImage.asset->url,
  publishedAt,
  excerpt,
  content,
  "featuredImageUrl": featuredImage.asset->url,
  readTime,
  tags
}`;

export const GET_RELATED_BLOGS = groq`*[_type == "blog" && isPublished == true && _id != $currentId && count(tags[@ in $currentTags]) > 0] | order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  author,
  authorTitle,
  "authorImageUrl": authorImage.asset->url,
  "featuredImageUrl": featuredImage.asset->url,
  publishedAt,
  excerpt,
  readTime
}`;

// Whitepaper Queries
export const GET_WHITEPAPERS = groq`*[_type == "whitepaper"] | order(_createdAt desc){
  _id,
  title,
  description,
  "fileUrl": file.asset->url
}`;

// Use Case (Ynsight) Queries (aligned with old website WhatWeThink & IndustryYnsights)
export const GET_YNSIGHTS = groq`*[_type == "ynsight"] | order(_createdAt desc){
  _id,
  title,
  slug,
  problemStatement,
  solutionProviderName,
  "solutionProviderImageUrl": solutionProviderImage.asset->url,
  solution,
  impact,
  expertsTake,
  competitorPositioning,
  enterpriseOneName,
  "enterpriseOneImageUrl": enterpriseOneImage.asset->url,
  enterpriseTwoName,
  "enterpriseTwoImageUrl": enterpriseTwoImage.asset->url,
  industry,
  "thumbnailUrl": thumbnail.asset->url
}`;

export const GET_YNSIGHT_BY_SLUG = groq`*[_type == "ynsight" && slug.current == $slug][0]{
  title,
  slug,
  industry,
  usecaseDescription,
  problemStatement,
  solution,
  impact,
  testimonials,
  competitorPositioning,
  enterpriseName,
  enterpriseOneName,
  "enterpriseOneImage": enterpriseOneImage.asset->url,
  enterpriseTwoName,
  "enterpriseTwoImage": enterpriseTwoImage.asset->url,
  solutionProviderName,
  "solutionProviderImage": solutionProviderImage.asset->url,
  "imageUrl": thumbnail.asset->url,
  _createdAt
}`;

export const GET_YNSIGHTS_BY_INDUSTRY = groq`*[_type == "ynsight" && industry == $industry] | order(_createdAt desc){
  _id,
  title,
  slug,
  problemStatement,
  solutionProviderName,
  "solutionProviderImageUrl": solutionProviderImage.asset->url,
  solution,
  impact,
  expertsTake,
  competitorPositioning,
  enterpriseOneName,
  "enterpriseOneImageUrl": enterpriseOneImage.asset->url,
  enterpriseTwoName,
  "enterpriseTwoImageUrl": enterpriseTwoImage.asset->url,
  industry,
  "thumbnailUrl": thumbnail.asset->url
}`;

// Open Position Queries
export const GET_OPEN_POSITIONS = groq`*[_type == "openPosition" && isActive == true] | order(postedAt desc){
  _id,
  title,
  slug,
  department,
  location,
  employmentType,
  experience,
  description,
  postedAt
}`;

export const GET_OPEN_POSITION_BY_SLUG = groq`*[_type == "openPosition" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  department,
  location,
  employmentType,
  experience,
  description,
  responsibilities,
  requirements,
  postedAt
}`;
