import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  return (
<header className="bg-black text-light mb-4 py-0" style={{ paddingLeft: '25px', position: 'fixed', top: 0, left: 0, right: 0 }}>
        <div className="mr-auto">
          <Link className="text-blue" to="/">
            <h1 className="m-0" style={{ fontFamily: 'Monospace', fontSize: '48px', fontWeight: 'bold' }}>MarketMate</h1>
          </Link>
          <p className="m-0" style={{ fontFamily: 'Monaco', fontSize: '18px', color: 'white' }}>Buy & Sell Today</p>
        </div>
    </header>




  );
};


export default Header;