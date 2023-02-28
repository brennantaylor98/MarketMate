import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
<div className="position-relative">
      <div className="container-fluid bg-light position-absolute bottom-0"></div>
      <div className="container-fluid bg-light">
        <div className="row justify-content-center"> <main style={{ Top: '100px' }}></main>

        <div className="col-3">
                  <Link to="/" className="btn btn-outline-secondary btn-block">
                   home
                  </Link>
            </div>

          <div className="col-3">
            <button type="button" className="btn btn-outline-secondary btn-block">Inbox</button>
          </div>
          
          <div className="col-3 dropdown">
            <div className="dropup">
              <button className="btn btn-outline-secondary btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Profile
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="me">Recently Viewed</a> <br />
                <a className="dropdown-item" href="me">Selling</a>
              </div>
            </div>
          </div>

            <div className="col-3">
                  <Link to="/login" className="btn btn-outline-secondary btn-block">
                   Login
                  </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;







