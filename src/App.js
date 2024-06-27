import React, { useState } from 'react';
import Header from './components/Header/header';
import Products from './components/Products/products';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [groupSearch, setGroupSearch] = useState(false);
  const [searchType, setSearchType] = useState('hybrid');
  const handleSearch = (term, group, type) => {
    setSearchTerm(term);
    setGroupSearch(group);
    setSearchType(type);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Products searchTerm={searchTerm} groupSearch={groupSearch} searchType={searchType}/>
    </div>
  );
};

export default App;
