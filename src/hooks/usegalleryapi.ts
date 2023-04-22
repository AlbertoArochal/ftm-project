import { useContext, useCallback, useEffect } from "react";
import { GalleryContext } from "../context/gallerycontext";
import { GalleryApi } from "../services/galleryapi";

export const useGalleryApi = () => {
    const BASE_URL = "http://localhost:3100";
    const { setImages, clearImages } = useContext(GalleryContext);
    const galleryApi = new GalleryApi(BASE_URL);
    const useGetImages = useCallback(
        async (page: number = 1, search: string = "") => {
            const images = await galleryApi.getImagesByPage(page);
            setImages(images);
        },
        []
    );

    const useGetImagesBySearch = useCallback(async (search: string) => {
        const images = await galleryApi.getImagesBySearch(search);
        clearImages();
        setImages(images);
    }, []);

    const useLikeImage = (id: number) => {
        let isLiked = false;

        useEffect(() => {
            const like = async () => {
                const data = await galleryApi.likeImage(id);
                if (Object.keys(data).length > 0) {
                    isLiked = true;
                }
            };

            like();
        }, [id]);

        return isLiked;
    };

    return { useGetImages, useLikeImage, useGetImagesBySearch };
};
