import Card from "react-bootstrap/Card";
import img1 from "../img/bg-card-ads.jpg";

export default function CardAds() {
  return (
    <Card className="bg-dark text-white text-center rounded-0">
      <Card.Img
        src={img1}
        alt="https://unsplash.com/photos/i-love-you-to-the-moon-_jhUrn9o8yM?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
      />
      <Card.ImgOverlay>
        <div className="h-100 row align-content-center">
          <Card.Text className="fw-bold col text-sm font-small-custom">
            It's Time To Follow Your Journey
          </Card.Text>
          <hr />
          <Card.Text className="fw-light col text-sm font-small-custom">
            Experience the magic of the world with{" "}
            <b className="fw-bold">JalaninAja</b>, where every journey is
            infused with boundless motivation, inviting you to embrace adventure
            and write your own story of exploration.
          </Card.Text>
          <Card.Text>Follow Us</Card.Text>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="px-2">
              <a href="https://www.instagram.com/">
                <img
                  style={{ width: "20px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
                  alt="INSTAGRAM"
                />
              </a>
            </div>
            <div className="px-2">
              <a href="https://www.linkedin.com/">
                <img
                  style={{ width: "50px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/150px-LinkedIn_2021.svg.png"
                  alt="INSTAGRAM"
                />
              </a>
            </div>
          </div>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}
