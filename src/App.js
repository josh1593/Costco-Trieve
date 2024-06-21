import React, { useState } from 'react';
import Header from './components/Header/header';
import Products from './components/Products/products';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [groupSearch, setGroupSearch] = useState(false);

  const handleSearch = (term, group) => {
    setSearchTerm(term);
    setGroupSearch(group);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Products searchTerm={searchTerm} groupSearch={groupSearch} />
    </div>
  );
};

export default App;
