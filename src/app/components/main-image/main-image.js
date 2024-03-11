import "./main-image.css";
import Image from "next/image";

export const MainImage = ({ src }) => {
    return (
        <div>
            <Image
            alt="A sample Image"
            src={ src }>
            </Image>
        </div>
    )
};