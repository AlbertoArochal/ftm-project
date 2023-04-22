import { useContext, useState } from "react";
import { GalleryContext } from "../../context/gallerycontext";
import { ImageType } from "../../models/imagetype";

export const ImagesFetcher = () => {
    const { images } = useContext(GalleryContext);

    return (
        <>
            {images.length === 0 ? (
                <p>This Gallery is empty</p>
            ) : (
                <div className="Gallery_container">
                    <div className="Gallery_images">
                        {images.map((image: ImageType) => (
                            <div className="Gallery_image" key={image.id}>
                                <img
                                    src={image.main_attachment.small}
                                    alt={image.title}
                                />
                                <div className="image__details">
                                    <h3>{image.title}</h3>
                                    <p> Likes: {image.likes_count}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};
