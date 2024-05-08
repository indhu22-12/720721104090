import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Product = ({ name, company, category, ...otherProps }) => {
  const [hovered, setHovered] = useState(false);

  const baseColor = '#f0f0f0'; // Light gray base color
  const hoverColor = '#e0e0e0'; // Slightly darker gray on hover

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div
      className="product"
      style={{ backgroundColor: hovered ? hoverColor : baseColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/products/${otherProps.id}`}>
        <img src={`https://picsum.photos/200/200?random=${Math.random()}`} alt="Product Placeholder" />
      </Link>
      <h3>{name}</h3>
      <p>{company}</p>
      <p>Category: {category}</p>
      {/* Display other product details (price, rating, discount, availability) */}
    </div>
  );
};


function AllProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    category: '',
    company: '',
    minPrice: '',
    maxPrice: '',
    minRating: '',
    availability: 'all', 
    sort: 'price (asc)', 
    currentPage: 1,
    pageSize: 10, /
  });

 
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products', {
        params: filterOptions,
      });
      setProducts(response.data.products.map(product => ({
        ...product,
        id: Math.random().toString(36).substring(2, 15), // Generate unique ID
      })));
      setCategories(response.data.categories);
      setCompanies(response.data.companies);
    };

    fetchProducts();
  }, [filterOptions]);

  // Implement logic 

  return (
    <div className="all-products-page">
      {/* Filter options */}
      <div>
        {/* ... Filter controls for category, company, price, rating, availability */}
      </div>
      <div>
        {/* ... Sorting controls (price, rating, discount) */}
      </div>
      {/* Product list */}
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      {/* Pagination controls */}
      {/* ... */}
    </div>
  );
}


function SingleProductPage({ match }) {
  const [product, setProduct] = useState(null);

  
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`/api/products/${match.params.productId}`);
      setProduct(response.data);
    };

    fetchProduct();
  }, [match.params.productId]);

  return (
    <div className="single-product-page">
      {product ? (
        <>
          <h3>{product.name}</h3>
          <p>{product.company}</p>
          <p>Category: {product.category}</p>
          {/* Display other product details */}
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProductsPage
