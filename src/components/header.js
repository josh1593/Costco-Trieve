import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaMapMarkedAlt } from 'react-icons/fa';
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
          justifyContent: 'flex-end',
          alignItems: 'center',
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

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#EEEEEE', padding: '5px' }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                width: '700px',
                height: '30px',
              }}
            />
            <button
              style={{
                padding: '5px 10px',
                border: 'none',
                borderRadius: '0 5px 5px 0',
                cursor: 'pointer',
                height: '42px',
                width: '40px',
              }}
            >
              <FaSearch
                style={{
                  transform: 'rotate(90deg)',
                  color: '#0060A9',
                }}
              />
            </button>
          </div>
        </div>

        <div style={{ paddingRight: '3rem', color: '#0060A9' }}>
          <style>
            {`
              @media (min-width: 768px) {
                .sign-in-register {
                  padding-right: 5rem;
                }
              }
            `}
          </style>
          <div className="sign-in-register">
            Sign In / Register | Orders & Returns | <FaShoppingCart style={{ paddingTop: '3px' }} /> Cart
          </div>
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
      ></div>

      <div style={{ display: 'flex', backgroundColor: '#fafafa', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ gap: ['2', '2', '4', '10'], display: 'flex', paddingBottom: '1rem' }}>
          {/* Rest of the component */}
        </div>
      </div>
    </div>
  );
};

export default Header;
