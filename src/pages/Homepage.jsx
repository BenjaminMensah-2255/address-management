// Home.js
import React from 'react';
//import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import Footer from './Footer';
const Homepage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Address Management System</h1>
        <p>Organize and manage your addresses with ease.</p>
      </header>

      <main className="home-main">
        <h2>Get Started</h2>
        <p>Start managing your addresses today. Click the button below to access your address book.</p>
        {/* <Link to="/address-book">
          <button className="home-button">Go to Address Book</button>
        </Link> */}
      </main>
      <Footer/>
    </div>
  );
};

export default Homepage;
