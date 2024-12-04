import React, { useState } from 'react';

function Filter() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20);
  const allProducts = [
    { id: 1, name: 'Sushi Roll', price: 10 },
    { id: 2, name: 'Ramen', price: 8 },
    { id: 3, name: 'Tempura', price: 12 },
  ];

  const handleFilter = () => {
    const result = allProducts.filter(
      product => product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredProducts(result);
  };

  return (
    <div>
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
        placeholder="Min Price"
      />
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        placeholder="Max Price"
      />
      <button onClick={handleFilter}>Filter</button>
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

export default Filter;
