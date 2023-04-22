import { useContext, useEffect } from "react";
import { GalleryContext } from "../../context/gallerycontext";
import { useGalleryApi } from "../../hooks/usegalleryapi";

type ImageListProps = {
    page?: number;
    searchQuery?: string;
};

export const ImageList = ({ page, searchQuery }: ImageListProps) => {
    const { state, dispatch } = useContext(GalleryContext);
    const { BASE_URL } = state;

    const { getImagesByPage, getImagesBySearch } = useGalleryApi();

    useEffect(() => {
        if (page) {
            getImagesByPage(page);
        } else if (searchQuery) {
            getImagesBySearch(searchQuery);
        } else {
            getImagesByPage(1);
        }
    }, [BASE_URL, dispatch, page, searchQuery]);

    return (
        <div>
            <h1>image list</h1>
        </div>
    );
};
