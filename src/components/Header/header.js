import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

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

  const mainLinks = ['Grocery'];

  return (
    <div>
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

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#EEEEEE', padding: '5px', paddingBottom: '10px', paddingTop: '10px' }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src="https://www.costco.com/wcsstore/CostcoGLOBALSAS/images/Costco_Logo-1.png"
            alt="Costco Logo"
            style={{ height: '53px', marginLeft: '0rem', paddingRight: '2rem' }}
          />
          <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{
                padding: '5px',
                fontSize: '16px',
                border: 'none',
                width: '700px',
                height: '30px',
              }}
            />
            <button
              type="submit"
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
                  color: '#ffffff',
                }}
              />
            </button>
          </form>
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
    </div>
  );
};

export default Header;
