import React from 'react'

export default function Header(props) {
  return (
      <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
              <a className="navbar-brand" href="#">PG-Portal</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Music Inventory</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Sports Inventory</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Tech Inventory</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Contact Us</a>
                      </li>
                      
                  </ul>
                  <div className="buttons">
                  <a href="" className="btn btn-outline-dark">
                      <i className="fa fa-sign-in me-1"></i> Login </a>
                  </div> 
                  {props.searchBar ? <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>: ""}
              </div>
          </div>
      </nav>
  )
}
