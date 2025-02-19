import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Health & Wellness</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/vitamins">Vitamins</a></li>
        <li><a href="/symptoms">Symptom Checker</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
