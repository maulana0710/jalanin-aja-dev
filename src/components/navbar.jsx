import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SidebarProfile from "./sidebar-profile";

export default function Navigationbar({ setShow, show, sessionData }) {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  // console.log("🚀 ~ Navbar ~ sessionData:", sessionData);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = 50; // Adjust this value according to your header's height

      // Check if the scroll position is greater than the header height
      if (scrollPosition > headerHeight) {
        setBackgroundColor("light"); // Change background color when scrolled
      } else {
        setBackgroundColor("transparent"); // Revert to transparent background color
      }
    };

    // Add event listener for scroll event when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once
  return (
    <>
      {show === "sidebarProfile" ? (
        <Row>
          <Col>
            <Navbar
              expand="lg"
              className={`navbar navbar-expand-lg bg-${backgroundColor} position-absolute w-100 border-bottom border-light border-2`}
              style={{ transition: "background-color 0.3s ease" }}
            >
              <Container>
                <Navbar.Brand href="/">JalaninAja</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about-us">About Us</Nav.Link>
                  </Nav>
                  <Nav className="d-flex">
                    <button
                      className="btn btn-outline-success"
                      type="submit"
                      onClick={
                        show === "login"
                          ? () => setShow("")
                          : () => setShow("login")
                      }
                    >
                      Login
                    </button>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
          <Col className="col-sm-2">
            <SidebarProfile show={show} setShow={setShow} />
          </Col>
        </Row>
      ) : (
        <Navbar
          expand="lg"
          className={`navbar navbar-expand-lg bg-${backgroundColor} position-absolute w-100 border-bottom border-light border-2`}
          style={{ transition: "background-color 0.3s ease" }}
        >
          <Container>
            <Navbar.Brand href="#">JalaninAja</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about-us">About Us</Nav.Link>
              </Nav>
              <Nav className="d-flex">
                {!sessionData ? (
                  <button
                    className="btn btn-outline-success"
                    type="submit"
                    onClick={
                      show === "login"
                        ? () => setShow("")
                        : () => setShow("login")
                    }
                  >
                    Login
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-success"
                    type="submit"
                    onClick={
                      show === "sidebarProfile"
                        ? () => setShow("")
                        : () => setShow("sidebarProfile")
                    }
                  >
                    {sessionData.user_username}
                  </button>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
}
