import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making API requests
const Product = ({ name, company, category, ...otherProps }) => {
    // ... JSX to display product details
  };
  function App() {
    const [products, setProducts] = useState([]);
    const [filterOptions, setFilterOptions] = useState({
      category: '',
      company: '',
      // ... other filters
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
  
    // Fetch products on component mount or filter change
    useEffect(() => {
      const fetchProducts = async () => {
        // Logic to fetch products from APIs based on filters and pagination
        // Use axios or other libraries to make API requests
        const response = await axios.get(/* API endpoint URL */);
        setProducts(response.data);
        // ... Calculate total pages based on data length
      };
  
      fetchProducts();
    }, [filterOptions, currentPage]);
  
    // ... Implement filtering, sorting, and pagination logic
  
    return (
      <div className="App">
        <h1>Product Catalog</h1>
        {/* Filter options */}
        {/* Sorting options */}
        {/* Pagination controls */}
        <div className="products-container">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    );
  }
    