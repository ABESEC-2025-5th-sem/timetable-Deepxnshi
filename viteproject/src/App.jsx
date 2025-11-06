import React from 'react';
import products from './assets/product.json';

const Header = () => {
  return (
    <div className="header">Header</div>
  );
}

const Search = () => {
  return (
    <div className="search-container">
      <input type="search" placeholder="Search here" className="search-input" />
    </div>
  );
}

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.product} className="product-image" />
      <h3 className="product-name">{product.product}</h3>
    </div>
  );
}

const Body = () => {
  return (
    <div className="body">
      <div className="products-container">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <div className="footer">Footer</div>
  );
}

const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
