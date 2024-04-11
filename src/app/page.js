import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { MainImage } from './components/main-image/main-image';
import { SiteImage } from './components/site-image/site-image';
import { BasicContent } from './homepage-basic-content/basic-content';

import "./homepage.css";

import heroImage from '../../public/sample-images/img/19.png';
import imageOne from '../../public/sample-images/img/image-category-1.png';
import imageTwo from '../../public/sample-images/img/card.png';
import imageThree from '../../public/sample-images/img/card2.png';
import imageFour from '../../public/sample-images/img/card3.png';
import imageFive from '../../public/sample-images/img/card4.png';

export default function Home() {
  return (
    <div id="homepage-container">
    <div id="homepage-header">
      <Header />

      <div id="homepage-call-to-act">
        <div id="homepage-head-content">
          <h3 id="homepage-roboto-heading">
            WrapZip Clothing Line
          </h3>
          <p id="homepage-large-font">
            You can explore our high quality and<br/>fashionable clothing line!
          </p>
          <button className="big-button">
            Shop Now
          </button>
        </div>
        <div id="homepage-image-content">
          <MainImage src={ heroImage }/>
        </div>
      </div>
    </div>
    
    <div id="homepage-body-container">
      <div id="homepage-explore-container">
        <p id="homepage-explore-text">EXPLORE NEW AND POPULAR STYLES</p>
          <div id="homepage-explore-images">
            <SiteImage src={ imageOne } ratio="two-two" />
            <div id="homepage-explore-images-small">
              <SiteImage src={ imageTwo } />
              <SiteImage src={ imageThree } sale={true}/>
              <SiteImage src={ imageFour } hot={true}/>
              <SiteImage src={ imageFive } />
            </div>
          </div>
        </div>
    </div>
    <BasicContent/>
    <Footer />
    </div>
  );
}
