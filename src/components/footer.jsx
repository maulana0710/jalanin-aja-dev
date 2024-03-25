import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function Footer() {
  return (
    <Card className="bg-dark text-white text-center rounded-0">
      <div className="row justify-content-center container-fluid">
        <Row className="pb-2 row-cols-1 row-cols-sm-2 row-cols-md-3">
          <Col md={4}>
            <Card.Title className="navbar-brand fw-bold text-sm fs-2">
              <a className="text-light" style={{ textDecoration: 'none' }} href="/">
                JalaninAja
                </a>
            </Card.Title>
          </Col>
          <Col>
            <Row>
              <Card.Title className="fw-bold">Links</Card.Title>
              <Card.Text className="h-100 fw-light text-sm font-small-custom">
                Home
              </Card.Text>
              <Card.Text className="h-100 fw-light text-sm font-small-custom">
                About Us
              </Card.Text>
            </Row>
          </Col>
          <Col>
            <Row>
              <Card.Title className="fw-bold">Contact Us</Card.Title>
              <Card.Text className="h-100 fw-light text-sm font-small-custom">
                +62 000 1111 2222
              </Card.Text>
              <Card.Text className="h-100 fw-light text-sm font-small-custom">
                dummy@gmail.com
              </Card.Text>
            </Row>
          </Col>
        </Row>
        <hr/>
        <Card.Text>Follow Us</Card.Text>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="px-2">
            <a
              className="text-light"
              style={{ textDecoration: "none" }}
              href="https://www.instagram.com/"
            >
              <img
                style={{ width: "20px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
                alt="INSTAGRAM"
              />
              Instagram
            </a>
          </div>
          <div className="px-2">
            <a
              className="text-light"
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/"
            >
              <img
                style={{ width: "50px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/150px-LinkedIn_2021.svg.png"
                alt="LINKEDIN"
              />
              LinkedIn
            </a>
          </div>
        </div>
        <Card.Text className="opacity-25 p-4">Copyright © 2024 JalaninAja</Card.Text>
      </div>
    </Card>
  );
}
