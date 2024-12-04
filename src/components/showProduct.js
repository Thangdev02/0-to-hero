import React, { useState } from 'react';

function ShowProduct() {
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false); // Trạng thái để điều khiển hiển thị

  const handleClick = () => {
    // Mô phỏng việc lấy dữ liệu sản phẩm
    const sampleProducts = [
      { id: 1, name: 'Sushi Roll', price: 10 },
      { id: 2, name: 'Ramen', price: 8 },
      { id: 3, name: 'Tempura', price: 12 },
    ];

    setProducts(sampleProducts);
    setIsVisible(!isVisible); // Đảo trạng thái hiển thị
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isVisible ? 'Hide Products' : 'Show Products'}
      </button>
      {isVisible && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShowProduct;
