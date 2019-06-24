import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                {/* <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li> */}
              </ul>
            </div>
          </nav>
          </div>
        );
    }
}

export default NavbarComponent;