import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            &nbsp;x.lud.fun
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/join" className="nav-link" to="/join">
                  join
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/info">
                  info
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
