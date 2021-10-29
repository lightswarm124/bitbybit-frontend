import styled from "@emotion/styled";
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
  const handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("contactForm");
    let formData = new FormData(myForm);
    console.log(formData);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };
  return (
    <ContactSection>
      <ContentWrapper id="contact">
        <BlockHeading title="Contact Us" />
        <Form
          id="contactForm"
          name="contact"
          // method="POST"
          onSubmit={handleSubmit}
          // action="https://bitbybit.org/?success=true"
          data-netlify="true"
          data-netlify-honeypot="true"
          encType="application/x-www-form-urlencoded"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" />
          </Form.Group>
          <br />
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="name@example.com"
              required
            />
          </Form.Group>
          <br />
          <Form.Group className="mb-3" multiline="true">
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
