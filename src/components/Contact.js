import React, { useState } from "react";
import styled from "@emotion/styled";
import ContentWrapper from "./ContentWrapper";
import BlockHeading from "./_ui/BlockHeading";
import { Form, Alert } from "react-bootstrap";
import "../styles/alertClose.css";

const Button = styled.button`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  padding: 0.65rem 1.25rem;
  border-radius: 8px;
  margin-right: 1.5rem;
  color: white;
  background-color: ${(props) =>
    props.variant === "primary" ? "#480EF2" : "transparent"};
  border: ${(props) =>
    props.variant === "primary" ? "none" : "2px solid #480EF2"};
  text-decoration: none;
  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:focus {
    outline: 0;
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`;

const ContactSection = styled.div`
  width: 100%;
  background-color: white;
  padding-bottom: 6rem;

  #contact {
    padding: 3rem;
    background: rgba(255, 36, 152, 0.05);
    color: #220969;

    @media (max-width: 768px) {
      padding: 1rem;

      Form {
      }
    }

    Form {
      padding-left: 3rem;

      @media (max-width: 768px) {
        padding-left: 0;
      }
    }
  }
`;

const Contact = () => {
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("contactForm");
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setShow(true))
      .catch((error) => alert(error));
  };
  return (
    <ContactSection>
      <ContentWrapper id="contact">
        <BlockHeading title="Contact Us" />
        {show && (
          <Alert
            variant="success"
            show={show}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              style={{
                color: "#155724",
                border: "1px solid #155724",
                marginRight: "1rem",
              }}
              onClick={() => setShow(false)}
              variant="outline-success"
            >
              X
            </Button>
            <p style={{ margin: "auto 0" }}>
              Thank you for your information. We will reply to your message as
              soon as possible.
            </p>
          </Alert>
        )}
        <Form
          id="contactForm"
          name="contact"
          onSubmit={handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="true"
          encType="application/x-www-form-urlencoded"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control id="name" name="name" type="text" />
          </Form.Group>
          <br />
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email address</Form.Label>
            <Form.Control
              name="email"
              id="email"
              type="email"
              placeholder="name@example.com"
              required
            />
          </Form.Group>
          <br />
          <Form.Group className="mb-3" multiline="true">
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control name="message" id="message" as="textarea" rows="3" />
          </Form.Group>
          <br />
          <div>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </div>
        </Form>
      </ContentWrapper>
    </ContactSection>
  );
};

export default Contact;
