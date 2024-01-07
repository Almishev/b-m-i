import React from 'react';

const Head = () => {
  return (
    <nav style={headStyle}>
      <p style={{ fontWeight: 'bold', fontSize: '24px' }}>Dобре дошли в Калкулатора за Индекс на Телесна Маса</p>
    </nav>
  );
};

const headStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '0.5rem',

};

export default Head;