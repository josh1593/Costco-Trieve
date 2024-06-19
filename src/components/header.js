import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa'; 
import { FaMapMarkedAlt } from 'react-icons/fa'
import { PiPackageThin } from 'react-icons/pi';
const Header = () => {
  const navigationLinks = [
    'Costco Next',
    'While Supplies Last',
    'Online-Only',
    'Treasure Hunt',
    "What's New",
    'New Lower Prices',
    'Get Email Offers',
    'Customer Service',
    'US',
  ];

  const mainLinks = [
    'Shop',
    'Grocery',
    'Same-Day',
    'Deals',
    'Business Delivery',
    'Optical',
    'Pharmacy',
    'Services',
    'Photo',
    'Travel',
    'Membership',
    'Locations',
  ];

  return (
    <div>
      <div
        style={{
          backgroundColor: '#005dab',
          color: '#fff',
          padding: '0.5rem',
          textAlign: 'center',
          fontSize: '16px',
          fontWeight: 'bold',
        }}
      >
        Starts Today! Coddle Aria Sleeper Sectional $1,199.99 After $500 OFF
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end', // Changed from 'flex-start' to 'flex-end'
          alignItems: 'center', // Changed from 'right' to 'center'
          padding: '0.5rem 2rem',
          backgroundColor: '#EEEEEE',
        }}
      >
        <div
          style={{
            display: 'flex',
            color: '#0060A9',
            fontSize: '14px',
          }}
        >
          {navigationLinks.map((link, index) => (
            <div key={index} style={{ marginRight: '1rem' }}>
              {link}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#EEEEEE', padding:'10px'}}>
        <img
          src="https://www.costco.com/wcsstore/CostcoGLOBALSAS/images/Costco_Logo-1.png"
          alt="Costco Logo"
          style={{ height: '50px', marginLeft: '3rem', paddingRight: '2rem' }}
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              padding: '5px',
              fontSize: '16px',
              border: 'none',
              width : '700px',
              height : '30px'
            }}
          />
          <button
            style={{
              padding: '5px 10px',
              border: 'none',
              borderRadius: '0 5px 5px 0',
              cursor: 'pointer',
              height : '42px',
              width : '40px'
            }}
          >
            <FaSearch
              style={{
                transform: 'rotate(90deg)', // Add this line to rotate the icon 90 degrees
                color: '#0060A9', // Add this line to change the icon color to blue
              }} />
          </button>
        </div>

        <div style={{paddingLeft: '80px', color:'#0060A9'}}>
            Sign In / Register | Orders & Returns | <FaShoppingCart style={ {paddingTop:'3px'}} /> Cart
        </div>
      </div>
      <div style={{ backgroundColor: '#0073A6', height: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%', paddingLeft: '3rem' }}>
          {mainLinks.slice(0, 12).map((link, index) => (
            <div key={index} style={{ marginRight: '2.5rem', color: '#fff' }}>
              {link}
            </div>
          ))}
        </div>
      </div>
      <div
      style={{
        boxShadow: 'base',
        padding: '4',
        paddingLeft: '14',
        justifyContent: 'space-between',
        display: 'flex',
      }}
    >
    </div>
    <div style={{ display: 'flex', backgroundColor: '#fafafa', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
  <div style={{ gap: ['2', '2', '4', '10'], display: 'flex' , paddingBottom:'1rem', }}>
    <div>
      <div style={{ fontSize: '13px', fontWeight: 400, paddingBottom: '0.2rem', paddingTop: '0.3rem' }}>My Warehouse</div>
      <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '0.2rem' }}>
        <div style={{ width: '4', marginLeft: '2rem' }}>
          <FaMapMarkedAlt />
        </div>
        <div style={{ fontWeight: 600, marginLeft: '0.8rem' }}>Seattle</div>
      </div>
      <div style={{ fontSize: '12px', fontWeight: 400, color: 'green', marginLeft: '2rem' }}>Open: Until 8:30 pm</div>
    </div>

    <div style={{ paddingLeft: '3rem' }}>
      <div style={{ fontSize: '13px', fontWeight: 400, paddingBottom: '0.2rem', paddingTop: '0.3rem' }}>Delivery Location</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '4' }}>
          <PiPackageThin />
        </div>
        <div style={{ fontWeight: 600 }}>98101</div>
      </div>
    </div>
  </div>

  <div
    style={{
      color: '#0073A6',
      cursor: 'pointer',
      display: ['none', 'none', 'block', 'block'],
      paddingTop: '1rem',
      paddingRight: '1rem',
      marginLeft: 'auto'
    }}
  >
    Lists/ Buy Again
  </div>
</div>

    </ div>
  );
};

export default Header;
