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

  // ✅ Add all filtered products to cart
  const addAllToCart = () => {
    const availableProducts = filteredProducts.filter((p) => p.inStock);
    if (availableProducts.length === 0) {
      alert("No products in stock to add!");
      return;
    }
    setCart([...cart, ...availableProducts]);
  };

  return (
    <div>
      <h2>Available Products</h2>
      {filteredProducts.length === 0 ? (
        <p>no products available</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={() => setCart([...cart, product])}
          />
        ))
      )}

      {/* ✅ Button to add all at once */}
      <button onClick={addAllToCart}>Add All to Cart</button>

      <h3>Cart ({cart.length})</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;