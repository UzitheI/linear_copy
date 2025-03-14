import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <img src="/assets/logo.svg" alt="Logo" className="h-8" />
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#">Product</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Company</a></li>
        </ul>
      </nav>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
    </header>
  );
};

export default Header;
