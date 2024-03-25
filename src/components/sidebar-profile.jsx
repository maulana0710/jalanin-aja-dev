import { Col, Row, CloseButton, Nav } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

export default function SidebarProfile({ SidebarProfile, setShow, show }) {
  return (
    <div className="sticky-top bg-light overflow-hidden border border-start-1 text-dark position-absolute end-0">
      <Row>
        <Col md={7}>
          <div className="position-relative top-50 start-50 translate-middle ">
            <h2>Menu</h2>
          </div>
        </Col>
        <Col md='auto' className="text-center">
          <div className="position-relative top-50 start-50 translate-middle ">
            <CloseButton
              onClick={
                show === "sidebarProfile"
                  ? () => setShow("")
                  : () => setShow("sidebarProfile")
              }
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Nav.Link className="btn">
          <Link
            to={`/AccountSetting`}
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            Account Setting
          </Link>
        </Nav.Link>
        <Nav.Link className="btn">
          <Link
            to={`/logout`}
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            Logout
          </Link>
        </Nav.Link>
      </Row>
    </div>
  );
}
