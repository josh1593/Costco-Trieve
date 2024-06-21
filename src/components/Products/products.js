import React, { useState, useEffect } from 'react';
import ProductCard from './productCard';
import './product.css';
import Spinner from '../spinner';

const Products = ({ searchTerm, groupSearch }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchGroupedProducts = async () => {
    setIsLoading(true);
    try {
      const apiUrl = 'https://api.trieve.ai/api/chunk_group/group_oriented_search';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': process.env.REACT_APP_API_KEY,
          'Content-Type': 'application/json',
          'TR-Dataset': process.env.REACT_APP_TR_GROUP_DATASET
        },
        body: JSON.stringify({ query: searchTerm, search_type: "semantic" })
      });
      const data = await response.json();

      const groupedProducts = {};
      data.group_chunks.forEach(chunk => {
        const trackingId = chunk.group_tracking_id;
        var metadata = chunk.metadata;
        var productsMetaData = metadata.map(item => item.metadata[0].metadata); 
        if (groupedProducts[trackingId]) {
          groupedProducts[trackingId].push(...productsMetaData);
        } else {
          groupedProducts[trackingId] = productsMetaData;
        }
      });
  
      setProducts(groupedProducts);
    } catch (error) {
      console.error('Error fetching from Trieve API:', error);
      setProducts({});
    }
    setIsLoading(false);
  };

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const apiUrl = 'https://api.trieve.ai/api/chunk/search';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': process.env.REACT_APP_API_KEY,
          'Content-Type': 'application/json',
          'TR-Dataset': process.env.REACT_APP_TR_DATASET
        },
        body: JSON.stringify({ query: searchTerm, search_type: "semantic" })
      });
      const data = await response.json();
      setProducts(data.score_chunks.map(chunk => chunk.metadata[0].metadata));
    } catch (error) {
      console.error('Error fetching from Trieve API:', error);
      setProducts([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setProducts([]);
    } else {
      if (groupSearch) {
        fetchGroupedProducts();
      } else {
        fetchProducts();
      }
    }
  }, [searchTerm, groupSearch]);

  return (
    <div className="container">
      <div className="product-list">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {Array.isArray(products) ? (
              <div className="products-tiles">
                {products.map(product => (
                  <ProductCard key={product.SKU} product={product} />
                ))}
              </div>
            ) : (
              Object.keys(products).map(trackingId => (
                <div key={trackingId} className="group-container">
                  {groupSearch && <h2 className="group-title">{trackingId.replace(/_/g, ' ')}</h2>}
                  <div className="products-tiles">
                    {products[trackingId].map(product => (
                      <ProductCard key={product.SKU} product={product} />
                    ))}
                  </div>
                </div>
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
