import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '2rem 0', fontSize: '0.8rem', opacity: 0.6 }}>
      <p>&copy; {new Date().getFullYear()} Sanket Naik. Designed with Zen Principles.</p>
    </footer>
  );
};

export default Footer;