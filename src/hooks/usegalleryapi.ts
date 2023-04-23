import { useContext, useCallback } from "react";
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
        const likeImage = useCallback(async () => {
            const result = await galleryApi.likeImage(id);
            return result;
        }, [id]);

        return likeImage;
    };

    return { useGetImages, useLikeImage, useGetImagesBySearch };
};
