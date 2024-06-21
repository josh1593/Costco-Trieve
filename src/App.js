import React, { useState } from 'react';
import Header from './components/Header/header';
import Products from './components/Products/products';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Products searchTerm={searchTerm} />
    </div>
  );
};

export default App;
