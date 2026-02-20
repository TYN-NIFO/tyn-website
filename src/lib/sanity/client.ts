import { createClient } from "next-sanity";

export const projectId = "v1snxays";
export const dataset = "production";
export const apiVersion = "2023-01-01";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Set to false for ISR/SSG to get fresh data
});
