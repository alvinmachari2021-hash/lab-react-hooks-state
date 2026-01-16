import React from 'react';
import ProductCard from './ProductCard';

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
];

const ProductList = ({ category, cart, setCart }) => {
  const filteredProducts = sampleProducts.filter((product) => {
    if (category === "all") return true;
    return product.category === category;
  });

  const addToCart = (product) => {
    if (product.inStock) {
      setCart([...cart, product]);
    } else {
      alert(`${product.name} is out of stock!`);
    }
  };

  return (
    <div>
      <h2>Available Products</h2>
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;