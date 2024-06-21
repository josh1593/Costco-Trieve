import React, { useState, useEffect } from 'react';
import ProductCard from './productCard';
import './product.css';
import Spinner from '../spinner';

const Products = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    const fetchProducts = async () => {
      if (searchTerm.trim() === '') {
        setProducts([]);
      } else {
        setIsLoading(true);
        try {
          const response = await fetch('https://api.trieve.ai/api/chunk/search', {
            method: 'POST',
            headers: {
              'Authorization': process.env.REACT_APP_API_KEY,
              'Content-Type': 'application/json',
              'TR-Dataset': process.env.REACT_APP_TR_DATASET
            },
            body: JSON.stringify({ query: searchTerm, search_type: "semantic" })
          });
          const data = await response.json();
          console.log(data.score_chunks);
          setProducts(data.score_chunks.map(chunk => chunk.metadata[0].metadata));
        } catch (error) {
          console.error('Error fetching from Trieve API:', error);
          setProducts([]);
        }
        setIsLoading(false); 
      }
    };

    fetchProducts();
  }, [searchTerm]);

  return (
    <div className="container">
      <div className="product-list">
        {isLoading ? ( 
          <Spinner />
        ) : (
          products.map(product => (
            <ProductCard key={product.SKU} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
