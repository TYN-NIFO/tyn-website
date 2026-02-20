import { groq } from "next-sanity";

// Blog Queries
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

export const GET_BLOG_BY_SLUG = groq`*[_type == "blog" && slug.current == $slug][0]{
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

// Use Case (Ynsight) Queries
export const GET_YNSIGHTS = groq`*[_type == "ynsight"] | order(_createdAt desc){
  _id,
  title,
  slug,
  industry,
  solutionProviderName,
  "imageUrl": thumbnail.asset->url,
  problemStatement,
  _createdAt
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
  enterpriseOneName,
  "enterpriseOneImage": enterpriseOneImage.asset->url,
  enterpriseTwoName,
  "enterpriseTwoImage": enterpriseTwoImage.asset->url,
  solutionProviderName,
  "solutionProviderImage": solutionProviderImage.asset->url,
  "imageUrl": thumbnail.asset->url,
  _createdAt
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
