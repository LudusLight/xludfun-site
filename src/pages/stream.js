import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <div className="hcenter-parent">
          <iframe
            allowfullscreen="true"
            src="https://mixer.com/embed/player/BD64?disableLowLatency=1"
            width="620"
            height="349"
          />
          <iframe
            allowfullscreen="true"
            src="https://mixer.com/embed/chat/BD64?disableLowLatency=1"
            width="378"
            height="349"
          />
        </div>
      </div>
    )
  }
}

export default App
