import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

// dynamic year for footer
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: '#121212' }}
      className="text-light sticky-bottom"
    >
      <div className="row w-100 footer-title">
        <div class="col text-center pt-5 pb-3 h3">rekindle.com</div>
      </div>
      <div class="row w-100">
        <div className="col footer-nav">
          <ul>
            <li>Home</li>
            <li>Reviews</li>
            <li>About me</li>
            <li>Login</li>
          </ul>
          <ul className="social-icon">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitterSquare />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>
      <div className="row w-100">
        <div class="col text-center pt-3 pb-3">
          <span className="copyright">
            Copyright &copy;{year} All rights reserved{' '}
          </span>
          <span id="brand" className="h6">
            rekindle
          </span>
          .
        </div>
      </div>
    </div>
  );
};

export default Footer;
