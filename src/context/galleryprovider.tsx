import { galleryReducer } from "../reducer/galleryReducer";
import { GalleryContext, GalleryContextType } from "./gallerycontext";
import { useReducer } from "react";
import { initialState } from "../reducer/galleryReducer";
import { ImageType } from "../models/imagetype";

type GalleryProviderProps = {
    children: React.ReactNode;
    initialState: typeof initialState;
};

export const GalleryProvider = ({ children }: GalleryProviderProps) => {
    const [state, dispatch] = useReducer(galleryReducer, initialState);

    const setImages = (images: ImageType[]) =>
        dispatch({ type: "ADD_IMAGES", payload: images });

    const contextValue: GalleryContextType = {
        images: state.images,
        setImages,
    };

    return (
        <GalleryContext.Provider value={contextValue}>
            {children}
        </GalleryContext.Provider>
    );
};
