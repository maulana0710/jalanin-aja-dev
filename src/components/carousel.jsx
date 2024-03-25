import img1 from "../img/mountain-1.jpg";
import img2 from "../img/road-1.jpg";
import img3 from "../img/mountain-2.jpg";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselComp() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="w-100" src={img1} alt='https://unsplash.com/photos/rocks-in-ocean-nsFLt0rBQHI?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash' text="First slide" />
          <Carousel.Caption>
            <h3>Indonesia</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100"  src={img2} alt='https://unsplash.com/photos/gray-asphalt-road-under-gray-cloudy-sky-during-daytime-3CksK6QSk2I?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash' text="Second slide" />
          <Carousel.Caption>
            <h3>Road to Hekla, Iceland</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100"  src={img3} alt='https://unsplash.com/photos/body-of-water-near-mountain-during-daytime-kp1b87OASIY?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash' text="Third slide" />
          <Carousel.Caption>
            <h3>Finland</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
