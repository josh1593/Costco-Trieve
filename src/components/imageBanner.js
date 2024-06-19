import React from 'react';

const ImageBanner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div style={{ width: '100%', position: 'relative' }}>
        <div style={{
          backgroundColor: '#ea854e',
          color: 'black',
          padding: '11px 20px',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
          fontWeight: 'bold',
          textAlign: 'center',
          width: '100%',
          boxSizing: 'border-box',
          fontSize: '20px'
        }}>
          Starts Today!
        </div>
        <img
          src="https://mobilecontent.costco.com/live/resource/img/24w10010/d_24w10010_july_mvm_cover_v2.jpg"
          alt="July MVM Cover"
          style={{ width: '100%', height: 'auto', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' }}
        />
      </div>
    </div>
  );
};

export default ImageBanner;
