import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import logo from '../logo.png'
import '../App.css'
class App extends Component {
  render() {
    return (
      <div className="full-height">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <br />
          <h2 className="App-title">x.lud.fun</h2>
          <p style={{ maxWidth: '450px', margin: 'auto' }}>
          a small vanilla, no-grief survival server.
          </p>
        </header>
        <section>
          <div className="add-btn-container">
            <Link to="/join" className="btn btn-primary btn-large">
              join our community
            </Link>
            <Link to="/info" className="btn btn-light btn-large">
              learn more about it
            </Link>
          </div>
        </section>

        
      </div>
    )
  }
}

export default App
