import { useContext, useCallback, useEffect } from "react";
import { GalleryContext } from "../context/gallerycontext";
import { GalleryApi } from "../services/galleryapi";

export const useGalleryApi = () => {
    const BASE_URL = "http://localhost:3100/";
    const { setImages } = useContext(GalleryContext);
    const galleryApi = new GalleryApi(BASE_URL);
    const useGetImages = useCallback(async (page: number, search: string) => {
        if (search) {
            const images = await galleryApi.getImagesBySearch(search);
            setImages(images);
            return;
        }
        const images = await galleryApi.getImagesByPage(page);
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

    return { useGetImages, useLikeImage };
};
