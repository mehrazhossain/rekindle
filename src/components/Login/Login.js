import React, { useState } from 'react';
import './Login.css';
import { Form, Button } from 'react-bootstrap';
import google from '../../images/social/google-logo.png';
import facebook from '../../images/social/facebook-logo.png';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import { useNavigate, useLocation } from 'react-router';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  let showError;
  let showLoader;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // reset password
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  // for auth redirect
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';

  // !google sign in
  const [signInWithGoogle, googleLoading] = useSignInWithGoogle(auth);
  // !facebook sign in
  const [signInWithFacebook, facebookLoading] = useSignInWithFacebook(auth);

  // sign in with email & password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // handle email blur
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  // handle password blur
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  // !google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
  // !facebook sign in
  const handleFacebookSignIn = () => {
    signInWithFacebook().then(() => {
      navigate(from, { replace: true });
    });
  };

  // !handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  // handle reset password
  const handleResetPassword = async () => {
    await sendPasswordResetEmail(email);
    toast.success('Sent email');
  };

  if (error) {
    showError = (
      <p className="text-danger text-center">Error: {error.message}</p>
    );
  }
  if (loading || googleLoading || facebookLoading) {
    showLoader = <p className="text-primary text-center h1">Loading</p>;
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
        {showLoader}
        <div>
          <p
            onClick={handleResetPassword}
            className="text-primary forget-password"
          >
            Forget password?
          </p>
          <Toaster />
        </div>
        <div className="text-center mt-4">
          <Button className="w-50" variant="dark" type="submit">
            Login
          </Button>
          <Toaster />
        </div>
        <hr className="m-3" />
      </Form>
      {showError}
      <div>
        <button className="btn btn-dark w-50 mx-auto d-block my-2">
          <img style={{ width: '30px' }} src={google} alt="" />
          <span onClick={handleGoogleSignIn} className="px-2">
            Continue With Google
          </span>
        </button>

        <button className="btn btn-dark w-50 mx-auto d-block my-2">
          <img style={{ width: '30px' }} alt="" src={facebook} />
          <span onClick={handleFacebookSignIn} className="px-2">
            Continue With Facebook
          </span>
        </button>
      </div>
      <div className="text-center pb-5">
        <small>
          Don't have an account yet? <Link to={'/signup'}>Sign up now!</Link>
        </small>
      </div>
    </div>
  );
};

export default Login;
