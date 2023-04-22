import { ImageType } from "../models/imagetype";

export const updateImages = (images: ImageType[]) => ({
    type: "UPDATE_IMAGES",
    payload: images,
});

export const clearImages = () => ({
    type: "CLEAR_IMAGES",
});
