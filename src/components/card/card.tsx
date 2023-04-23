import { ImageType } from "../../models/imagetype";
import { LikeButton } from "../likebutton/likebutton";
import redo from "../../assets/img/redo_grey.svg";

interface CardProps {
    image: ImageType;
}

export const Card = ({ image }: CardProps) => {
    return (
        <div className="gallery__image">
            <img
                className="image__main"
                src={image.main_attachment.small}
                alt={image.title}
            />
            <div className="image__details">
                <h3 className="image__name">{image.title}</h3>
                <p className="image__author">
                    <span>by</span> {image.author}
                </p>
            </div>
            <div className="image__icons">
                <LikeButton
                    imageId={image.id}
                    initialIsLiked={image.liked}
                    likesCount={image.likes_count}
                />
                <div className="image__button image__redo">
                    <p>000</p>
                    <img src={redo} alt="redo icon" />
                </div>
            </div>
        </div>
    );
};
