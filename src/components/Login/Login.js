import React, { useState } from 'react';
import './Login.css';
import { Form, Button } from 'react-bootstrap';
import google from '../../images/social/google-logo.png';
import facebook from '../../images/social/facebook-logo.png';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import { useNavigate } from 'react-router';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // !google sign in
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  // !google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  if (user || googleUser) {
    navigate('/');
  }
  return (
    <div className="login">
      <h1 className="text-center">Login</h1>
      <Form onClick={handleFormSubmit} className="w-50 mx-auto mt-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <div className="text-center mt-4">
          <Button className="w-50" variant="dark" type="submit">
            Login
          </Button>
        </div>
      </Form>
      <hr className="m-3" />
      <div>
        <button className="btn btn-dark w-50 mx-auto d-block my-2">
          <img style={{ width: '30px' }} src={google} alt="" />
          <span onClick={handleGoogleSignIn} className="px-2">
            Continue With Google
          </span>
        </button>

        <button className="btn btn-dark w-50 mx-auto d-block my-2">
          <img style={{ width: '30px' }} alt="" src={facebook} />
          <span className="px-2">Continue With Facebook</span>
        </button>
      </div>
      <div className="text-center">
        <small>
          Don't have an account yet? <Link to={'/signup'}>Sign up now!</Link>
        </small>
      </div>
    </div>
  );
};

export default Login;
