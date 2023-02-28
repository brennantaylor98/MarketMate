import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  return (
    <header className="bg-black text-light mb-4 py-0 flex-row align-center" style={{position: 'fixed', top: 0, left: 0, right: 0}}>
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div className="mr-auto">
          <Link className="text-blue" to="/">
            <h1 className="m-0" style={{ fontFamily: 'Monospace', fontSize: '48px', fontWeight: 'bold' }}>MarketMate</h1>
          </Link>
          <p className="m-0" style={{ fontFamily: 'Monaco', fontSize: '18px', color: 'white' }}>Buy & Sell Today</p>
        </div>
      </div>
        <div>
        {Auth.loggedIn() ? (
      <>
        <Link className="btn btn-sm btn-primary m-2" to="/me" style={{ backgroundColor: '#4f86f7' }}>
  {Auth.getProfile().data.username}'s profile
</Link>
        <button className="btn btn-sm btn-light m-2" onClick={logout}style={{ backgroundColor: '#ffffff' }}>
          Logout
        </button>
      </>
    ) : (
      <>
        <Link className="btn btn-sm btn-info m-2" to="/login">
          Login
        </Link>
        <Link className="btn btn-sm btn-light m-2" to="/signup">
          Signup
        </Link>
            </>
          )}
        </div>
    </header>
  );
};

export default Header;
