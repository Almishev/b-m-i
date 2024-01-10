import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Anton Almishev</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '0.3rem',
  position: 'fixed',
  bottom: ' 0',
  width: '100%',
 
};

export default Footer;