import { createContext } from "react";
import { ImageType } from "../models/imagetype";

export type State = {
    images: ImageType[];
};

export type Action =
    | { type: "ADD_IMAGES"; payload: ImageType[] }
    | { type: "CLEAR_IMAGES" };

export type Dispatch = (action: Action) => void;

export type GalleryContextType = {
    images: ImageType[];
    setImages: (images: ImageType[]) => void;
    clearImages: () => void;
};

export const GalleryContext = createContext<GalleryContextType>({
    images: [],
    setImages: () => {},
    clearImages: () => {},
});
