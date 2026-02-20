import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { dataset, projectId } from "./client";

const imageBuilder = createImageUrlBuilder({
    projectId: projectId || "",
    dataset: dataset || "",
});

export const urlForImage = (source: SanityImageSource) => {
    return imageBuilder.image(source);
};
