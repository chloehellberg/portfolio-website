import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Connect.css";


export default function Connect() {

  const [fields, handleFieldChange] = useState({
    name:"",
    email: "",
    message: ""
  });

  async function handleSubmit(event) {
    event.preventDefault();
  }

  function renderForm() {
    return (
      <Form onSubmit={handleSubmit} >
        <Form.Group controlId="name" size="sm" >
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
        <Form.Group controlId="email" size="sm" >
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
    <div className="connectAllContainer">
      <div className="Connect">
        <h3 className="connectTitle">GET IN TOUCH</h3>
        {renderForm()}
      </div>
      <div className="Contact">
        
      </div>
    </div>
  )
}