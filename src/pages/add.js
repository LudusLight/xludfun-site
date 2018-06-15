import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../App.css'

class App extends Component {
  render() {
    return (
      <div>
        <h4 style={{ textAlign: 'center' }}>The Viav Bot</h4>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <a
            className="btn btn-primary btn-large"
            href="https://discordapp.com/oauth2/authorize?client_id=446151195338473485&permissions=66321471&scope=bot"
          >
            Viav Bot
          </a>
        </div>
        <br />
        <br />
        <h4 style={{ textAlign: 'center' }}>
          Multi-channel Music Bots{' '}
          <small>
            <i>Coming Soon</i>
          </small>
        </h4>
        <div
          className="music-button-section"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          <a
            target="_blank"
            className="btn btn-primary"
            href="https://discordapp.com/oauth2/authorize?client_id=450388382313349141&permissions=0&scope=bot"
          >
            Music 1
          </a>
          <a
            target="_blank"
            className="btn btn-primary"
            href="https://discordapp.com/oauth2/authorize?client_id=450388440232755210&permissions=0&scope=bot"
          >
            Music 2
          </a>
          <a
            target="_blank"
            className="btn btn-primary"
            href="https://discordapp.com/oauth2/authorize?client_id=450388489989521441&permissions=0&scope=bot"
          >
            Music 3
          </a>
          <a
            target="_blank"
            className="btn btn-primary"
            href="https://discordapp.com/oauth2/authorize?client_id=450388546130542592&permissions=0&scope=bot"
          >
            Music 4
          </a>
          <a
            target="_blank"
            className="btn btn-primary"
            href="https://discordapp.com/oauth2/authorize?client_id=451111950341111809&permissions=0&scope=bot"
          >
            Music 5
          </a>
        </div>
      </div>
    )
  }
}

export default App
