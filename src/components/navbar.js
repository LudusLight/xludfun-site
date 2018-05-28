import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="https://cdn.discordapp.com/attachments/446202984372895758/450414797952122900/1_round.png"
              style={{ width: '30px' }}
            />
            &nbsp;Viav
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
                <Link className="nav-link" to="/hosts">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">
                  Add
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/setup">
                  Community
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li>
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://www.patreon.com/manbabies"
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
