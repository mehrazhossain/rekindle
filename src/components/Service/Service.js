import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import './Service.css';

const Service = ({ service }) => {
  const { id, image, name, description } = service;

  return (
    <div class="col">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <button
          type="button"
          class="service-button btn btn-outline-light text-dark w-100"
        >
          Explore service <HiArrowNarrowRight />
        </button>
      </div>
    </div>
  );
};

export default Service;
