import axios from "axios";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export default function Login({ setShow }) {
  const [input, setInput] = useState({});
  let navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/login.php",
        JSON.stringify({
          username: input.username,
          password: input.password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log("Response:", response.data);
      if (response.data.success === true) {
        sessionStorage.setItem("key", JSON.stringify(response.data.user));
        window.location.reload();
      }
      // Handle success response
      // For example, you can check if response.data.success === true and redirect the user
    } catch (error) {
      console.error("Error:", error);
      // Handle error response
      // For example, display an error message to the user
    }
  };
  return (
    <Card
      className="position-fixed top-50 start-50 translate-middle container-fluid bg-dark text-light"
      style={{ maxWidth: "25rem" }}
    >
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Card.Title className="text-center fw-bold">Login</Card.Title>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Enter username"
              name="username"
              value={input.username || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={input.password || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Row className="text-center">
            <Col>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Col>
            <Col>
              <Button
                variant="secondary"
                type="submit"
                onClick={() => setShow("signup")}
              >
                Signup
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}
