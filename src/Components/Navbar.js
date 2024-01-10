import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const taskbarColor=(mode)=>{
  if(mode==='light'){
    return 'light'
  }
  else{
    return 'dark'
  }
}

const dummy=()=>{
  console.log('just a dummy event listenr')
}

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${taskbarColor(props.mode)} bg-${taskbarColor(props.mode)}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li> */}
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div className={`form-check form-switch mx-2`}>
            <input className="form-check-input" type="checkbox" role="switch" checked={props.mode==='dark'} onChange={dummy} id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>

          <div className={`form-check form-switch mx-2`}>
            <input className="form-check-input" type="checkbox" role="switch" checked={props.mode==='purple'} onChange={dummy}  id="flexSwitchCheckDefault" onClick={props.purpleMode}/>
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Purple Mode</label>
          </div>

          <div className={`form-check form-switch mx-2`}>
            <input className="form-check-input" type="checkbox" role="switch" checked={props.mode==='pink'} onChange={dummy}  id="flexSwitchCheckDefault" onClick={props.pinkMode}/>
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Pink Mode</label>
          </div>

        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Give a Title',
  aboutText: 'About Us',
};
