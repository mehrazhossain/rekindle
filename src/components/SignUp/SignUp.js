import React, { useState } from 'react';
import './Signup.css';
import { Button, Form } from 'react-bootstrap';
import google from '../../images/social/google-logo.png';
import facebook from '../../images/social/facebook-logo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase.init';
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {
  let handleError;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // email verification
  const [sendEmailVerification, sending, verificationError] =
    useSendEmailVerification(auth);
  // sign up with email & password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  // signup with google
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  // signup with facebook
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);

  // for auth redirect
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  // sign up with email & password
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
    await sendEmailVerification();
    toast.success('Check your email for verify');
  };

  // !signup with google
  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };
  // !signup with facebook
  const handleFacebookSignUp = () => {
    signInWithFacebook();
  };

  if (user) {
    if (user.emailVerified) {
      navigate(from, { replace: true });
    }
  }

  if (error) {
    handleError = (
      <p className="text-danger text-center">Error: {error.message}</p>
    );
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
          <Toaster></Toaster>
        </div>
        <hr className="m-3" />
      </Form>
      {handleError}
      <div>
        <button className="btn btn-dark w-50 mx-auto d-block my-2">
          <img style={{ width: '30px' }} src={google} alt="" />
          <span onClick={handleSignInWithGoogle} className="px-2">
            Continue With Google
          </span>
        </button>

        <button className="btn btn-dark w-50 mx-auto d-block my-2">
          <img style={{ width: '30px' }} alt="" src={facebook} />
          <span onClick={handleFacebookSignUp} className="px-2">
            Continue With Facebook
          </span>
        </button>
      </div>
      <div className="text-center">
        <small>
          Have an account? <Link to={'/login'}>Login now!</Link>
        </small>
      </div>
    </div>
  );
};

export default SignUp;
