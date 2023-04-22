import { useState, useContext } from "react";
import { AppContext } from "../context/appcontext";
import { ImageType } from "../models/imagetype";
import { GalleryApi } from "../services/galleryapi";

export const useGalleryApi = () => {
    const { BASE_URL } = useContext(AppContext);
    const [images, setImages] = useState<ImageType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const galleryApi = new GalleryApi(BASE_URL);

    const getImagesByPage = async (page: number) => {
        setLoading(true);
        try {
            const data = await galleryApi.getImagesByPage(page);
            setImages(data);
            setError(null);
        } catch (err) {
            setError("Error fetching images by page");
        }
        setLoading(false);
    };

    const getImagesBySearch = async (search: string) => {
        setLoading(true);
        try {
            const data = await galleryApi.getImagesBySearch(search);
            setImages(data);
            setError(null);
        } catch (err) {
            setError("Error fetching images by search");
        }
        setLoading(false);
    };

    const likeImage = async (id: number) => {
        setLoading(true);
        try {
            const data = await galleryApi.likeImage(id);
            setError(null);
        } catch (err) {
            setError("Error liking image");
        }
        setLoading(false);
    };

    return {
        images,
        loading,
        error,
        getImagesByPage,
        getImagesBySearch,
        likeImage,
    };
};
