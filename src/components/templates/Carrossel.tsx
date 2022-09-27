import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Carrossel() {
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      interval={2000}
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      infiniteLoop={true}
    >
      <div>
        <img
          src="/images/slide-1.jpg"
          alt="img-1"
          className="h-screen w-full object-cover"
        />
      </div>
      <div>
        <img
          src="/images/slide-2.jpg"
          alt="img-1"
          className="h-screen w-full object-cover"
        />
      </div>
      <div>
        <img
          src="/images/slide-3.jpg"
          alt="img-1"
          className="h-screen w-full object-cover"
        />
      </div>
    </Carousel>
  );
}
