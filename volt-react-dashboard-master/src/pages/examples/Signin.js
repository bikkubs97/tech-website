import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, InputGroup, Button, Container } from '@themesberg/react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import BgImage from "../../assets/img/illustrations/signin.svg";

export default () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const history = useHistory();

  useEffect(() => {
    // Check if token is present in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      // Redirect to the "Cms" page
      history.push("/Cms");
    }
  }, [history]);

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("Please Wait...");
    try {
      const response = await fetch(
        "https://tech-server-x48n.onrender.com/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: state.username,
            password: state.password,
          }),
        }
      );

      if (response.status === 202) {
        console.log("success");
        const data = await response.json();
        localStorage.setItem("token", data.token);
        setMessage("Login Successful!");
        setTimeout(() => {
          history.push("/Cms");
        }, 100);
      } else {
        throw new Error("Authentication failed");
      }
    } catch (error) {
      console.error(error);
      setMessage("Incorrect username or password!");
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Administrator login</h3>
                </div>
                <Form className="mt-4" onSubmit={handleSubmit}>
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Username</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                      <Form.Control
                        name="username"
                        autoFocus
                        required
                        type="text"
                        placeholder="Enter username"
                        value={state.username}
                        onChange={handleInputChange}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        name="password"
                        required
                        type="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleInputChange}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Sign in
                  </Button>
                </Form>
                <div className="mt-3">
                  {message && <p className="text-danger">{message}</p>}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
