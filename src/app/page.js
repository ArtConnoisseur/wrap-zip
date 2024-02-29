import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <div id="homepage-header">
      <Header />
      <div id="homepage-call-to-act">
        <div id="homepage-head-content">
          <h3 id="homepage-roboto-heading">
            WrapZip Clothing Line
          </h3>
          <p id="homepage-large-font">
            You can explore our high quality and<br/> fashionable clothing line!
          </p>
          <button>
            Shop Now
          </button>
        </div>
        <div id="homepage-image-content">

        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}
