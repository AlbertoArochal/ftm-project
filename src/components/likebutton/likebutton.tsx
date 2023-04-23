import { useState, useEffect } from "react";
import thumbup from "../../assets/img/thumbup_grey.svg";
import { useGalleryApi } from "../../hooks/usegalleryapi";

interface LikeButtonProps {
    imageId: number;
    initialIsLiked: boolean;
    likesCount?: number;
}

export const LikeButton = ({
    imageId,
    initialIsLiked,
    likesCount,
}: LikeButtonProps) => {
    const [liked, setLiked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [likes, setLikes] = useState(likesCount);
    const { useLikeImage } = useGalleryApi();
    const likeImage = useLikeImage(imageId);

    useEffect(() => {
        setLiked(initialIsLiked);
    }, [initialIsLiked]);

    const handleLike = async () => {
        setIsLoading(true);
        const success = await likeImage();
        setIsLoading(false);

        if (success && likes) {
            setLiked(!liked);
            if (liked) {
                setLikes(likes - 1);
            } else {
                setLikes(likes + 1);
            }
        }
    };

    const buttonClass = liked
        ? "image__button image__thumbup--liked"
        : "image__button image__thumbup";

    return (
        <button
            onClick={handleLike}
            disabled={isLoading}
            className={buttonClass}
        >
            <p>0{String(likes).padStart(2, "0")}</p>{" "}
            <img src={thumbup} alt="thumb up icon" />
        </button>
    );
};
