import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Auth from '../../utils/auth';

const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const getClassNameForLink = (path) => {
    return location.pathname === path ? 'btn btn-outline-secondary active' : 'btn btn-outline-secondary';
  };

  return (
    <div className="footer-wrapper">
      <div className="footer-content">

        <div className="title">
          <span className="marketmate-title"> 💹      MarketMate</span>
        </div>

        <div className="subtext">
          Love the site? Buy me a <a href="https://www.redbull.com/us-en/" target="_blank" rel="noopener noreferrer"> <strong>Redbull</strong></a> :)
        </div>

        <div className="footer-container fixed-bottom">
          <div className="container-fluid bg-hidden">
            <div className="row justify-content-center">

              <div className="col-3">
                <Link to="/" className={getClassNameForLink('/')}>
                  Home
                </Link>
              </div>

              <div className="col-3">
                <button type="button" className={getClassNameForLink('/inbox')}>
                  Inbox
                </button>
              </div>

              <div className="col-3 dropdown">
                <div className="dropup">
                  <button
                    className={getClassNameForLink('/me')}
                    type="button"
                    id="dropdownMenuButton"
                    onClick={handleDropdownClick}
                  >
                    <Link to="/me" style={{ color: 'white' }}>
                      Profile
                    </Link>
                  </button>
                </div>
              </div>

              <div className="col-3">
                {Auth.loggedIn() ? (
                  <>
                    <button className={getClassNameForLink('/logout')} onClick={logout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className={getClassNameForLink('/login')}>
                      Login
                    </Link>
                  </>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;