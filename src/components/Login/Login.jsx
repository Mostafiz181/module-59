import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error,setError]=useState('')
  const [success,setSuccess]= useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    setError('')
    setSuccess('')
    if(!/(?=.*[!@#$%^&*])/.test(password)){
        setError("please login with a special character")
        return
    }
    else if (!/(?=.*[0-9])/.test(password)){
        setError("please log in at least 1 number")
        return
    }
    else if(password.length < 6){
        setError("please log in at least 6 digits")
        return
    }
    else{
        setSuccess('you are successfully login')
    }
    

  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button className="btn-submit" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="text-danger">{error}</p>
      <p className="text-success">{success}</p>

    </div>
  );
};

export default Login;
