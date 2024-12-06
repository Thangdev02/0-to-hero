import React, { useState } from 'react';
import Data from '../data/Data';
import CardProduct from '../components/CardProduct';

const StorePage = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(30);
    const [searchQuery, setSearchQuery] = useState('');

    // Filter products based on the search query and the selected price range
    const filteredProducts = Data.filter((product) =>
        product.price >= minPrice &&
        product.price <= maxPrice &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {/* Search */}
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ padding: '5px', width: '200px' }}
                />
            </div>

            {/* Price Filter */}
            <div style={{ margin: '20px 0' }}>
                <label>
                    Price Range: {minPrice} - {maxPrice}
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ flex: 1 }}>
                        <label>Min Price</label>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={minPrice}
                            onChange={(e) => setMinPrice(Number(e.target.value))}
                            step="1"
                        />
                        <span>{minPrice}</span>
                    </div>

                    <div style={{ flex: 1 }}>
                        <label>Max Price</label>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                            step="1"
                        />
                        <span>{maxPrice}</span>
                    </div>
                </div>
            </div>

            {/* Display Filtered Products */}
            <div>
                {filteredProducts.length === 0 ? (
                    <div>No products found</div>
                ) : (
                    filteredProducts.map((product) => (
                        <div key={product.id} style={{ display: 'inline-block', margin: '10px' }}>
                            <CardProduct product={product} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default StorePage;
