import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
          <h1 className="App-title">Upgrade Activating..</h1>
          <p>
            Viav is looking for a home. You looking to adopt? He&#39;s house
            trained.
          </p>
        </header>
        <section>
          <div className="add-btn-container">
            <a
              target="_blank"
              href="https://discordapp.com/oauth2/authorize?client_id=446151195338473485&permissions=66321471&scope=bot"
              className="btn btn-primary btn-large"
            >
              Add Viav
            </a>
            <a href="#" className="btn btn-light btn-large">
              Features
            </a>
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
