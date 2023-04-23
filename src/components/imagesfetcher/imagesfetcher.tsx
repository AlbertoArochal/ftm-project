// ImagesFetcher.tsx
import { useContext } from "react";
import { GalleryContext } from "../../context/gallerycontext";
import { ImageType } from "../../models/imagetype";
import { v4 as uuid } from "uuid";
import { Card } from "../card/card";

export const ImagesFetcher = () => {
    const { images } = useContext(GalleryContext);

    return (
        <>
            {images.length === 0 ? (
                <p>This Gallery is empty</p>
            ) : (
                <>
                    {images.map((image: ImageType) => (
                        <Card key={uuid()} image={image} />
                    ))}
                </>
            )}
        </>
    );
};
