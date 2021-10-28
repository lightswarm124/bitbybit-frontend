import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import ContentWrapper from "./ContentWrapper";
import Button from "../components/_ui/Button";

const ContactSection = styled.div``;

const Contact = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);
  return (
    <ContactSection>
      <ContentWrapper id="contact">
        {success && <p style={{ color: "green" }}>Thanks for your message! </p>}
        <form
          name="contact"
          method="POST"
          action="https://bitbybit.org/#contact/?success=true"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input id="standard-basic" label="name" name="name" /> <br />
          <input id="standard-basic" label="email" name="email" /> <br />
          <input
            multiline
            id="standard-multiline-static"
            label="message"
            name="message"
          />
          <br />
          <div>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </div>
        </form>
      </ContentWrapper>
    </ContactSection>
  );
};

export default Contact;
