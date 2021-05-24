import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Connect.css";
import * as Icon from "react-bootstrap-icons";

export default function Connect() {
  const [fields, handleFieldChange] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
  }

  function renderForm() {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name" size="sm">
          <Form.Control
            className="inputBoxes"
            style={{ fontSize: 9, padding: 8 }}
            autoFocus
            placeholder="NAME"
            type="name"
            value={fields.name}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="email" size="sm">
          <Form.Control
            className="inputBoxes"
            style={{ fontSize: 9, padding: 8 }}
            autoFocus
            placeholder="EMAIL"
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="message" size="lg">
          <Form.Control
            className="messageInput"
            style={{ fontSize: 9, padding: 8, height: 120 }}
            autoFocus
            placeholder="MESSAGE"
            as="textarea"
            type="message"
            value={fields.message}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Button
          className="submitBox"
          style={{ fontSize: 8, padding: 1 }}
          block
          size="lg"
          type="submit"
          // variant="success"
        >
          SEND
        </Button>
      </Form>
    );
  }

  return (
    <div className="connectPageContainer">
      <div className="spaceBefore"></div>
      <div className="connectAll">
        <div className="Contact">
          <h3 className="curiousBlurb">Curious About Hiring Me?</h3>
          <div>
            <Icon.Linkedin className="linkedIn" />
          </div>
          <div className="hex">
            <div className="hexTop"></div>
            <div className="hexMiddle">
              <p>
                <a
                  href="https://www.linkedin.com/in/chloehellberg/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon.Linkedin />
                  <br />
                  LinkedIn
                </a>
              </p>
            </div>
            <div className="hexBottom"></div>
          </div>
          <div className="hex">
            <div className="hexTop"></div>
            <div className="hexMiddle">
              <p>
                <a
                  href="https://twitter.com/ChloeHellberg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon.Twitter />
                  <br />
                  Twitter
                </a>
              </p>
            </div>
            <div className="hexBottom"></div>
          </div>
          <div className="hex">
            <div className="hexTop"></div>
            <div className="hexMiddle">
              <p>
                <a
                  href="https://github.com/chloehellberg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon.Github />
                  <br />
                  GitHub
                </a>
              </p>
            </div>
            <div className="hexBottom"></div>
          </div>
          <div className="secondRow">
            <div className="hex even hex-row">
              <div className="hexTop"></div>
              <div className="hexMiddle">
                <p>
                  <a href="mailto:chloe.hellberg@gmail.com">
                    <Icon.Envelope />
                    <br />
                    Email
                  </a>
                </p>
              </div>
              <div className="hexBottom"></div>
            </div>
            <div className="hex even">
              <div className="hexTop"></div>
              <div className="hexMiddle">
                <p className="tree">
                  <a
                    href="https://github.com/chloehellberg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon.TreeFill />
                    <br />
                  </a>
                </p>
              </div>
              <div className="hexBottom"></div>
            </div>
          </div>
        </div>
        <div className="ConnectForm">
          <h3 className="connectTitle">GET IN TOUCH</h3>
          {renderForm()}
        </div>
      </div>
      <div className="spaceAfter"></div>
    </div>
  );
}
