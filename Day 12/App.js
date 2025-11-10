// ...existing code...
import React from 'https://esm.sh/react';

const Header = () => {
  return (
    <header className="header">
      <img
        className="logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon logo"
      />
      <h2>Amazon webpage</h2>
      <ul className="nav-items">
        <li>Home</li>
        <li>Cart</li>
        <li>Deals</li>
      </ul>
    </header>
  );
};

const Search = () => {
  return (
    <div className="search">
      <input type="search" placeholder="Search products, brands and more" />
      <button type="button">Search</button>
    </div>
  );
};

const ProductList = () => {
  return (
    <section className="product-list">
      {/* placeholder products */}
      <div className="product-card">Product 1</div>
      <div className="product-card">Product 2</div>
      <div className="product-card">Product 3</div>
    </section>
  );
};

const Footer = () => {
  return <footer className="footer">© 2025 Amazon Clone Demo</footer>;
};

const Body = () => {
  return (
    <main className="body">
      <Search />
      <ProductList />
    </main>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
// ...existing code...