import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../App.css'

class App extends Component {
  render() {
    return (
      <div>
        <a
          className="btn btn-primary"
          href="https://discordapp.com/oauth2/authorize?client_id=446151195338473485&permissions=8&scope=bot"
        >
          Viav Bot
        </a>
      </div>
    )
  }
}

export default App
