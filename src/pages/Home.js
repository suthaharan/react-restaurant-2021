import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizza3.jpg'
import "../styles/Home.css";

const Home = () => {
  return (
      <div className="home"  style={{ backgroundImage: `url(${ BannerImage })`}}>
      <div className="headerContainer">
        <h1> Pizza Hub </h1>
        <p> For any age, any taste!</p>
        <Link to="/order">
            <button>
                Order
            </button>
        </Link>
      </div>
      </div>
  );
};

export default Home;
