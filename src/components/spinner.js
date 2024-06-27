import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '36rem', height: '60vh'}}>
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Spinner;
