import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../App.css'

class App extends Component {
  render() {
    return (
      <div>
        <h4 style={{ textAlign: 'center' }}>Server</h4>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <a
            className="btn btn-primary btn-large"
            target="_blank"
            href="https://i.imgur.com/5LNFpqf.png"
          >
            <code>x.lud.fun</code>
          </a>
        </div>
        
        <br />
        <p style={{ textAlign: 'center' }}>
          <i>Can't wait to play with you!</i>
        </p>
        <br />
        <h4 style={{ textAlign: 'center' }}>Discord</h4>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <a
            className="btn btn-primary btn-large"
            target="_blank"
            href="http://x.lud.fun/discord"
          >
            <code>x.lud.fun/discord</code>
          </a>
        </div>


        <br />
        <p style={{ textAlign: 'center' }}>
          <i>Can't wait to hear from you!</i>
        </p>
      </div>
    )
  }
}

export default App
