import React, { useState } from "react";
import { Col, Row, Card, Form, Button } from "@themesberg/react-bootstrap";

export const GeneralInfoForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    heading1: "",
    paragraph1: "",
    heading2: "",
    paragraph2: "",
    heading3: "",
    heading4: "",
    paragraph3: "",
    subheading1: "",
    subheading2: "",
    subheading3: "",
    subheading4: "",
    subheading5: "",
    subheading6: "",
    subheading7: "",
    subheading8: "",
    subheading9: "",
    paragraph4: "",
    paragraph5: "",
    paragraph6: "",
    paragraph7: "",
    paragraph8: "",
    paragraph9: "",
    paragraph10: "",
  });

  function handleSubmit(event) {
    console.log(formData);
    event.preventDefault();

    // Retrieve token from localStorage
    const token = localStorage.getItem("token");

    fetch("https://tech-server-x48n.onrender.com/users/data", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("Success:", data);
        window.alert("Update Successful!");
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const isLoggedIn = localStorage.getItem("token");


  return (
    <>
      {isLoggedIn ? (
        <Card border="light" className="bg-white shadow-sm mb-4">
          <Card.Body>
            <h5 className="mb-4">Edit The Content</h5>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your title"
                      value={formData.title}
                      onChange={handleChange}
                      id="title"
                      name="title"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Subtitle</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your subtitle"
                      value={formData.subtitle}
                      onChange={handleChange}
                      id="subtitle"
                      name="subtitle"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Heading 1</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your heading1"
                      value={formData.heading1}
                      onChange={handleChange}
                      id="heading1"
                      name="heading1"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Subheading 1</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your Subheading1"
                      value={formData.subheading1}
                      onChange={handleChange}
                      id="subheading1"
                      name="subheading1"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Paragraph 1</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your paragraph 1"
                      value={formData.paragraph1}
                      onChange={handleChange}
                      id="paragraph1"
                      name="paragraph1"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Subheading2</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your subheading2"
                      value={formData.subheading2}
                      onChange={handleChange}
                      id="subheading2"
                      name="subheading2"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Paragraph 2</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your paragraph 2"
                      value={formData.paragraph2}
                      onChange={handleChange}
                      id="paragraph2"
                      name="paragraph2"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Subheading 3</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your subheading 3"
                      value={formData.subheading3}
                      onChange={handleChange}
                      id="subheading3"
                      name="subheading3"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Paragraph 3</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your paragraph 3"
                      value={formData.paragraph3}
                      onChange={handleChange}
                      id="paragraph3"
                      name="paragraph3"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Subheading 4</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your sub heading 4"
                      value={formData.subheading4}
                      onChange={handleChange}
                      id="subheading4"
                      name="subheading4"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Paragraph 4</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your paragraph 4"
                      value={formData.paragraph4}
                      onChange={handleChange}
                      id="paragraph4"
                      name="paragraph4"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Subheading 5</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your subheading 5"
                      value={formData.subheading5}
                      onChange={handleChange}
                      id="subheading5"
                      name="subheading5"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Paragraph 5</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your paragraph 5"
                      value={formData.paragraph5}
                      onChange={handleChange}
                      id="paragraph5"
                      name="paragraph5"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Subheading 6</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your subheading 6"
                      value={formData.subheading6}
                      onChange={handleChange}
                      id="subheading6"
                      name="subheading6"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Paragraph 6</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your paragraph 6"
                      value={formData.paragraph6}
                      onChange={handleChange}
                      id="paragraph6"
                      name="paragraph6"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Subheading 7</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your sub heading 7"
                      value={formData.subheading7}
                      onChange={handleChange}
                      id="subheading7"
                      name="subheading7"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Paragraph 7</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your paragraph 7"
                      value={formData.paragraph7}
                      onChange={handleChange}
                      id="paragraph7"
                      name="paragraph7"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Sub heading 8</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your sub heading 8"
                      value={formData.subheading8}
                      onChange={handleChange}
                      id="subheading8"
                      name="subheading8"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Paragraph 8</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your paragraph 8"
                      value={formData.paragraph8}
                      onChange={handleChange}
                      id="paragraph8"
                      name="paragraph8"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Subheading 9</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your subheading 9"
                      value={formData.subheading9}
                      onChange={handleChange}
                      id="subheading9"
                      name="subheading9"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Paragraph 9</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your paragraph 9"
                      value={formData.paragraph9}
                      onChange={handleChange}
                      id="paragraph9"
                      name="paragraph9"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Heading2</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your heading2"
                      value={formData.heading2}
                      onChange={handleChange}
                      id="heading2"
                      name="heading2"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Heading3</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your heading3"
                      value={formData.heading3}
                      onChange={handleChange}
                      id="heading3"
                      name="heading3"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Paragraph 10</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your paragraph 10"
                      value={formData.paragraph10}
                      onChange={handleChange}
                      id="paragraph10"
                      name="paragraph10"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Heading 4</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your heading 4"
                      value={formData.heading4}
                      onChange={handleChange}
                      id="heading4"
                      name="heading4"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="mt-3">
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Update Content
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      ) : (
        <p>You must Login first!</p>
      )}
    </>
  );
};
