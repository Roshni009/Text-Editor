import React from "react";

export default function Navbar(props) {
  return (
    <div
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}fixed-top`}
    >
      <div className="container-fluid">
        <a className="navbar-brand mx-3" href="/jii">
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
            <button className="nav-link active mx-3" aria-current="page" >
                Text Utils
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link mx-3">
                About
              </button>
            </li>
          </ul>
          {/* <div className="d-flex">
        <div className="bg-primary rounded" onClick={() => {props.toggleMode('primary')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
        <div className="bg-danger rounded" onClick={() => {props.toggleMode('danger')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
        <div className="bg-warning rounded" onClick={() => {props.toggleMode('warning')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
        <div className="bg-success rounded" onClick={() => {props.toggleMode('success')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
        <div className="bg-light rounded" onClick={() => {props.toggleMode('light')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
        <div className="bg- dark rounded" onClick={() => {props.toggleMode('dark')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}>
       </div>
       </div> */}

          <div
            className={`form-check form-switch mx-5 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              Enable DarkMode
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
