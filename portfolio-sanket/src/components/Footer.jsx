import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '4rem 0', fontSize: '0.8rem', opacity: 0.8 }}>
      <div className="hanko-stamp" title="Sanket Naik">
        <span>Sanket</span>
        {/* <span>Naik</span> */}
      </div>
      <p style={{ marginTop: '1rem' }}>&copy; {new Date().getFullYear()} Sanket Naik. Built with Love</p>
    </footer>
  );
};

export default Footer;