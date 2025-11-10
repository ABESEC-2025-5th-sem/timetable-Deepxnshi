import React, { useState } from 'react';
import productsData from './assets/product.json';

const Header = ({ cartCount }) => {
  return (
    <div className="header">
      <span className="logo">E-Shop</span>
      <nav className="header-nav">
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#cart">Cart</a>
      </nav>
      <div className="cart-icon">
        <a href="#cart">
          <img src="/cart.svg" alt="Cart" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </a>
      </div>
    </div>
  );
}

const Search = ({ searchQuery, handleSearch }) => {
  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="Search here"
        className="search-input"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
}

const Product = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.product} className="product-image" />
      <h3 className="product-name">{product.product}</h3>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

const Body = ({ addToCart, searchQuery }) => {
  const filteredProducts = productsData.filter(product =>
    product.product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="products" className="body">
      <h2 className="section-title">Products</h2>
      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Product key={index} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p>No products found matching your search.</p>
        )}
      </div>
    </div>
  );
}

const Cart = ({ cart }) => {
  return (
    <div id="cart" className="cart-section">
      <h2 className="section-title">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.product} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.product}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <div id="about" className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Your one-stop shop for everything you need. We provide the best products with the best service.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#cart">Cart</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} E-Shop. All Rights Reserved.
      </div>
    </div>
  );
}

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="App">
      <Header cartCount={cart.length} />
      <Search searchQuery={searchQuery} handleSearch={handleSearch} />
      <Body addToCart={addToCart} searchQuery={searchQuery} />
      <Cart cart={cart} />
      <Footer />
    </div>
  );
}

export default App;