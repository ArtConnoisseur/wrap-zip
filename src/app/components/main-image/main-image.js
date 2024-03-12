import "./main-image.css";
import Image from "next/image";

export const MainImage = ({ src }) => {
    return (
        <div>
            <div id="main-img-border"></div>
            <div id="main-img-container">
                <Image
                alt="A sample Image"
                src={ src }
                fill={true}>
                </Image>
            </div>
        </div>
    )
};