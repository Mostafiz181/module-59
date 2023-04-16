import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const RegisterRBS = () => {

    const handleRegisterRBS =(event=>{
        event.preventDefault()
        const email = event.target.email.value;
        const password= event.target.password.value;
        console.log(email,password)
    })
  return (
    <div className="container">
      <h2>React Bootstrap form</h2>

      <Form onSubmit={handleRegisterRBS} >
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="Enter Your Email"
              
            /> 

          </Form.Group> <br />
          
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              name="password"
              placeholder="Enter Your Password"
              
            />
          </Form.Group> <br />
        
 
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button onSubmit={handleRegisterRBS} type="submit">Submit form</Button>
      </Form>
    </div>
  );
};

export default RegisterRBS;
