import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const allProducts = [
    { id: 1, name: 'Sushi Roll', price: 10 },
    { id: 2, name: 'Ramen', price: 8 },
    { id: 3, name: 'Tempura', price: 12 },
  ];

  const handleSearch = () => {
    const result = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(result);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a product"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
