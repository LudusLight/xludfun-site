import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>404: Page not Found!</h1>
        </header>
        <p className="App-intro">Try something else.</p>
      </div>
    )
  }
}

export default App
