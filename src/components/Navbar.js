import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/pizza-logo.png';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState } from 'react';

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
      //setOpenLinks({openLinks : !openLinks});
      setOpenLinks(!openLinks);
  }
  return (
    <div className='navbar'>
        <div className="leftSide" id={ openLinks? "open" : "close" }>
            <img src={Logo} alt="Logo"/>
            <div className="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
        </div>
        <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={ toggleNavbar }>
                <ReorderIcon />
            </button>
        </div>
    </div>
  );
};

export default Navbar;
