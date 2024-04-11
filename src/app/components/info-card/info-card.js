import { SiteImage } from "../site-image/site-image";
import './info-card.css';

const InfoCard = ({ src, infoTitle, infoCategory, infoPrice, hot, sale }) => {
    return (
        <div id="info-card">
            <div id="info-image-container">
                <SiteImage src={src} ratio='forty-fifty' hot={ hot} sale={ sale }/>
            </div>
            <div id="info-card-info">
                <h5>{infoTitle}</h5>
                {infoCategory}
                {infoPrice}
            </div>
        </div>
    )
}

export default InfoCard; 