import React, { useEffect, useState } from 'react';
import CardProduct from '../components/CardProduct'; // Component to display individual products
import axios from 'axios';

const StorePage = () => {
  const [products, setProducts] = useState([]); // State to store fetched products
  const [error, setError] = useState(''); // State to store errors (if any)
  const [loading, setLoading] = useState(true); // State to show loading status

  // Fetch products from API with Authorization
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
        if (!token) {
          throw new Error('No authorization token found. Please log in.');
        }

        const response = await axios.get('http://localhost:5086/api/Products', {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        });

        setProducts(response.data); // Set the fetched products
      } catch (err) {
        setError(err.message || 'Failed to fetch products. Please try again later.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures the effect runs once

  // If loading, display a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there's an error, display it
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* Display Filtered Products */}
      <div>
        {products.length === 0 ? (
          <div>No products found</div>
        ) : (
          products.map((product) => (
            <div key={product.pId} style={{ display: 'inline-block', margin: '10px' }}>
              <CardProduct product={product} /> {/* Pass the product data to the CardProduct component */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StorePage;
