import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <p className="text-center mt-5 text-uppercase font-weight-bold h1">
        My Services
      </p>
      <div className="container mt-3 mb-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
