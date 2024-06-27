import React, { useState } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import Select from 'react-select';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [groupSearch, setGroupSearch] = useState(false);
  const [selectedOption, setSelectedOption] = useState({ value: 'hybrid', label: 'Hybrid' });

  const options = [
    { value: 'semantic', label: 'Semantic' },
    { value: 'fulltext', label: 'FullText' },
    { value: 'hybrid', label: 'Hybrid' },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGroupSearchChange = (e) => {
    setGroupSearch(e.target.checked);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm, groupSearch, selectedOption.value);
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

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#EEEEEE',
          padding: '5px',
          paddingBottom: '10px',
          paddingTop: '10px',
        }}
      >
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
                backgroundColor: '#333',
              }}
            >
              <FaSearch
                style={{
                  transform: 'rotate(90deg)',
                  color: '#ffffff',
                }}
              />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px', paddingRight:'15px' }}>
              <input
                type="checkbox"
                id="group-search"
                checked={groupSearch}
                onChange={handleGroupSearchChange}
                style={{ paddingRight: '2px' }}
              />
              <label htmlFor="group-search" style={{ color: '#0060A9' }}>
                Group Search
              </label>
            </div>
            <div style={{ paddingLeft: '10px !important' }}>
              <Select
                value={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
            </div>
          </form>
        </div>
      </div>
      <div style={{ backgroundColor: '#0073A6', height: '40px'}}>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%', paddingLeft: '3rem' }}>
          <FaBars style={{ color: '#fff', marginRight: '1rem', fontSize: '20px' }} />
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
