import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/Footer.css';

const Footer = () => {
  return (<footer className='footer'>
      <div className='socialMedia'>
      <InstagramIcon />
      <TwitterIcon />
      <FacebookIcon />
      </div>
      <p>Copyright &copy;2022 Pizza Hub</p>

  </footer>);
};

export default Footer;
