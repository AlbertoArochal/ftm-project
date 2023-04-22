import { useContext, useEffect } from "react";
import { GalleryContext } from "../../context/gallerycontext";
import { useGalleryApi } from "../../hooks/usegalleryapi";
import { ImagesFetcher } from "../imagesfetcher/imagesfetcher";

type ImageListProps = {
    page?: number;
    searchQuery?: string;
};

export const ImageList = ({ page = 1, searchQuery = "" }: ImageListProps) => {
    const { images, setImages } = useContext(GalleryContext);
    const { useGetImages } = useGalleryApi();

    useEffect(() => {
        if (!page && !searchQuery) {
            useGetImages(1, "");
            return;
        }

        if (page) {
            useGetImages(page, "");
            return;
        }

        if (searchQuery) {
            useGetImages(1, searchQuery);
            return;
        }
    }, [page, searchQuery, useGetImages]);

    return (
        <div>
            <h1>image list</h1>
            <ImagesFetcher />
        </div>
    );
};
