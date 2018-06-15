import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import logo from '../logo.png'
import '../App.css'
import discord from '../discord.png'
class App extends Component {
  render() {
    return (
      <div className="full-height">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <br />
          <h2 className="App-title">The Ultimate Voice Channel Upgrade</h2>
          <p style={{ maxWidth: '500px', margin: 'auto' }}>
            Viav is an{' '}
            <b>
              <a target="_blank" href="https://github.com/BrandonDyer64/Viav">
                open source
              </a>
            </b>{' '}
            Discord bot, and is looking for a home. You looking to adopt?
            It&#39;s house trained.
          </p>
        </header>
        <section>
          <div className="add-btn-container">
            <Link to="/add" className="btn btn-primary btn-large">
              Add Viav
            </Link>
            <Link to="/features" className="btn btn-light btn-large">
              Features
            </Link>
          </div>
        </section>

        <div style={{ height: '60px' }} />
        <footer className="App-footer">
          <div
            style={{ backgroundImage: 'url(' + discord + ')' }}
            className="App-footer-image"
            alt="logo"
          />
        </footer>
      </div>
    )
  }
}

export default App
