import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { MainImage } from './components/images/main-image/main-image';
import { SectionDivider } from './components/section-divider/section-divider';
import heroImage from '../../public/sample-images/img/19.png';

import "./homepage.css";

import { ExploreGrid } from './homepage-content/explore-grid/explore-grid';
import { BasicContent } from './homepage-content/basics/basic-content';
import { Bestsellers } from './homepage-content/bestsellers/bestsellers';
import { Newsletter } from './homepage-content/newsletter-cta/newsletter-cta';

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
              <i class="fa-solid fa-bag-shopping"></i>
              Shop Now
            </button>
          </div>
          <div id="homepage-image-content">
            <MainImage src={ heroImage }/>
          </div>
        </div>
      </div>
      <SectionDivider />
      <ExploreGrid />
      <SectionDivider />
      <BasicContent />
      <SectionDivider />
      <Bestsellers />
      <SectionDivider />
      <Newsletter />
      <SectionDivider />
      <Footer />
    </div>
  );
}
