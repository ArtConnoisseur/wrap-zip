import { SiteImage } from "../images/site-image/site-image";
import './info-card.css';

const InfoCard = ({ src, infoTitle='Title', infoCategory='Category', infoPrice=223.90, hot, sale, className }) => {
    return (
        <div className={`info-card ${className}`}>
            <div className="info-image-container">
                <SiteImage src={src} ratio='forty-fifty' hot={ hot } sale={ sale } className='info-card-image'/>
            </div>
            <div className="info-card-info">
                <h5 className="info-card-title">{infoTitle}</h5>
                <div className="info-card-info-label">
                    <span>{infoCategory}</span>
                    <span>₹ {infoPrice}</span>
                </div>
            </div>
        </div>
    )
}

export default InfoCard; 