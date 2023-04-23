import { ImageType } from "../../models/imagetype";
import { LikeButton } from "../likebutton/likebutton";
import redo from "../../assets/img/redo_grey.svg";

interface CardProps {
    image: ImageType;
}

export const Card = ({ image }: CardProps) => {
    return (
        <div className="gallery__image">
            <div className="image__container">
                <img
                    className="image__main"
                    src={image.main_attachment.small}
                    alt={image.title}
                />
                <div className="laptop image__icons--laptop">
                    <LikeButton
                        imageId={image.id}
                        initialIsLiked={image.liked}
                        likesCount={image.likes_count}
                    />
                    <div className="image__button--laptop image__redo--laptop">
                        <div className="button__counter--laptop">
                            <p>000</p>
                        </div>
                        <img src={redo} alt="redo icon" />
                    </div>
                </div>
            </div>

            <div className="image__details">
                <h3 className="image__name">{image.title}</h3>
                <p className="image__author">
                    <span>by</span> {image.author}
                </p>
            </div>
            <div className="mobile image__icons">
                <LikeButton
                    imageId={image.id}
                    initialIsLiked={image.liked}
                    likesCount={image.likes_count}
                />
                <div className="image__button image__redo">
                    <div className="button__counter">
                        <p>000</p>
                    </div>
                    <img src={redo} alt="redo icon" />
                </div>
            </div>
        </div>
    );
};
