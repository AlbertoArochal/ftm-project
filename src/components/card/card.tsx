import { ImageType } from "../../models/imagetype";
import thumbup from "../../assets/img/thumbup.svg";
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
                <div className="image__thumbup">
                    <img src={thumbup} alt="thumb up icon" />
                    <p>00{image.likes_count}</p>
                </div>
                <div className="image__redo">
                    <img src={redo} alt="redo icon" />
                    <p>000</p>
                </div>
            </div>
        </div>
    );
};
