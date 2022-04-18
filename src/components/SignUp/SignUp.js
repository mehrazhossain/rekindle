import React, { useState } from 'react';
import './Signup.css';
import { Button, Form } from 'react-bootstrap';
import google from '../../images/social/google-logo.png';
import facebook from '../../images/social/facebook-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate('/');
  }
  return (
    <div className="signup-form">
      <h1 className="text-center">Sign Up</h1>
      <Form onSubmit={handleFormSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <div className="text-center mt-4">
          <Button className="w-50" variant="dark" type="submit">
            Sign up
          </Button>
        </div>
        <hr className="m-3" />
        <div>
          <button className="btn btn-dark w-50 mx-auto d-block my-2">
            <img style={{ width: '30px' }} src={google} alt="" />
            <span className="px-2">Continue With Google</span>
          </button>

          <button className="btn btn-dark w-50 mx-auto d-block my-2">
            <img style={{ width: '30px' }} alt="" src={facebook} />
            <span className="px-2">Continue With Facebook</span>
          </button>
        </div>
        <div className="text-center">
          <small>
            Have an account? <Link to={'/login'}>Login now!</Link>
          </small>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
