import { useState, useEffect } from "react";
import thumbup from "../../assets/img/thumbup.svg";
import { useGalleryApi } from "../../hooks/usegalleryapi";

interface LikeButtonProps {
    imageId: number;
    initialIsLiked: boolean;
}

export const LikeButton = ({ imageId, initialIsLiked }: LikeButtonProps) => {
    const [liked, setLiked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { useLikeImage } = useGalleryApi();
    const likeImage = useLikeImage(imageId);

    useEffect(() => {
        setLiked(initialIsLiked);
    }, [initialIsLiked]);

    const handleLike = async () => {
        setIsLoading(true);
        const success = await likeImage();
        setIsLoading(false);

        if (success) {
            setLiked(!liked);
        }
    };

    const buttonClass = liked ? "image__thumbup--liked" : "image__thumbup";

    return (
        <button
            onClick={handleLike}
            disabled={isLoading}
            className={buttonClass}
        >
            <img src={thumbup} alt="thumb up icon" />
        </button>
    );
};
