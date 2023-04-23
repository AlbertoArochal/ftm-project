import { ImageType } from "../../models/imagetype";
import { LikeButton } from "../likebutton/likebutton";
import redo from "../../assets/img/redo.svg";

interface CardProps {
    image: ImageType;
}

export const Card = ({ image }: CardProps) => {
    return (
        <div className="Gallery_image">
            <img src={image.main_attachment.small} alt={image.title} />
            <div className="image__details">
                <h3 className="image__name">{image.title}</h3>
                <p className="image__author">
                    <span>by</span> {image.author}
                </p>
            </div>
            <div className="image__icons">
                <LikeButton imageId={image.id} initialIsLiked={image.liked} />
                <div className="image__redo">
                    <img src={redo} alt="redo icon" />
                    <p>000</p>
                </div>
            </div>
        </div>
    );
};
