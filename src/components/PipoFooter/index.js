import React from 'react';
import './index.css';

import logo from '../../assets/logo.svg';

const PipoFooter = () => (
  <footer className='main-footer'>
    <a href='https://www.pipo.ai/'>
      <img
        src={logo}
        alt='Acessar o site da pipo'
        href='https://pipo.ai'
        target='_blank'
      />
    </a>
  </footer>
);

export default PipoFooter;
