import { useEffect } from "react";
import { useGalleryApi } from "../../hooks/usegalleryapi";
import { ImagesFetcher } from "../imagesfetcher/imagesfetcher";

export type ImageListProps = {
    page?: number;
    searchQuery?: string;
};

export const ImageList = ({ page = 1, searchQuery = "" }: ImageListProps) => {
    const { useGetImages, useGetImagesBySearch } = useGalleryApi();

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
            useGetImagesBySearch(searchQuery);
            return;
        }
    }, [page, searchQuery, useGetImages, useGetImagesBySearch]);

    return (
        <div className="image__list">
            <ImagesFetcher />
        </div>
    );
};
