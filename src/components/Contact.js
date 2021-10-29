import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import ContentWrapper from "./ContentWrapper";
import Button from "../components/_ui/Button";
import BlockHeading from "./_ui/BlockHeading";
import { Form } from "react-bootstrap";

const ContactSection = styled.div`
  width: 100%;
  background-color: white;
  padding-bottom: 6rem;

  #contact {
    padding: 3rem;
    background: rgba(255, 36, 152, 0.05);
    color: #220969;

    Form {
      padding-left: 3rem;
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <ContentWrapper id="contact">
        <BlockHeading title="Contact Us" />
        <Form
          name="contact"
          method="POST"
          action="https://bitbybit.org/#contact/?success=true"
          data-netlify="true"
          enctype="application/x-www-form-urlencoded"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
            id="standard-basic"
            label="name"
            name="name"
          >
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" />
          </Form.Group>
          <br />
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
            id="standard-basic"
            label="email"
            name="email"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="name@example.com"
              required
            />
          </Form.Group>
          <br />
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
            multiline
            id="standard-multiline-static"
            label="message"
            name="message"
          >
            <Form.Label>Message</Form.Label>
            <Form.Control name="message" as="textarea" rows="3" />
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
