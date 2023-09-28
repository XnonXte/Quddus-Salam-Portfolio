import { useState } from "react";

import { send } from "@emailjs/browser";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { EmailMeProps } from "../types/EmailMeProps";

const EmailMe = ({ serviceId, templateId }: EmailMeProps) => {
  const [fromName, setFromName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleEmailSubmit() {
    const params = {
      subject,
      to_name: "Quddus Salam",
      from_name: fromName,
      email_address: emailAddress,
      message,
    };

    send(serviceId, templateId, params)
      .then((response) => {
        console.log(response);
        alert("Your email sent successfully!");
      })
      .catch((error) => {
        if (error) console.error(error.message);

        alert(`An error occurred: ${error.message}`);
      })
      .finally(() => {
        setFromName("");
        setEmailAddress("");
        setSubject("");
        setMessage("");
      });
  }

  return (
    <section className="p-5 bg-dark text-light" id="email-me">
      <Container style={{ marginBottom: "42px" }}>
        <h2>
          Email Me <span className="text-primary">/&gt;</span>
        </h2>
        <span>Send me an email!</span>
        <Form
          className="mt-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleEmailSubmit();
          }}
        >
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name..."
              required
              onChange={(e) => setFromName(e.target.value)}
              value={fromName}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@email.com"
              required
              onChange={(e) => setEmailAddress(e.target.value)}
              value={emailAddress}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Hello!"
              required
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Aa"
              required
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send Email
          </Button>
        </Form>
      </Container>

      <div className="custom-shape-divider-bottom-1695874593">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default EmailMe;
