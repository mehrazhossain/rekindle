import React from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>Thanks for choosing my service.</h2>
      <p>Youre clicking on {serviceId}</p>
    </div>
  );
};

export default ServiceDetail;
