import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import '../App.css'
import channelsImg from '../auto-channels-transparent.png'
import radioImg from '../radio.png'
import messageImg from '../message.png'
import viavImg from '../logo.png'

class App extends Component {
  render() {
    return (
      <div className="features-page">
        <section className="row vcenter-parent">
          <div className="col-md-6 info-text">
            <h3>Pure vanilla.</h3>
            <p className="info-text">
              I really hate servers with a ton of plugins, so the only game changing plugin we have just chanegs how many people have to sleep for it to turn day.
            </p>
          </div>
          <div className="col-md-6 info-text">
            <h3>No griefing.</h3>
            <p className="info-text">Griefing isn't allowed on the server. This is enforced by CoreProtect logs.</p>
          </div>
        </section>
        <section className="row vcenter-parent">
          <div className="col-md-6 info-text">
            <h3>Strong community.</h3>
            <p className="info-text">
              We're a strong welcoming community that would love to have you in our server!
            </p>
          </div>
          <div className="col-md-6 info-text">
            <h3>Other information.</h3>
            <p className="info-text">
             Find rules and all other kinds of information on our Discord guild.
            </p>
          </div>
        </section>
        <section style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div className="add-btn-container">
          <Link to="/join"
            className="btn btn-primary btn-large"
          >
            join
          </Link>
          </div>
        </section>
      </div>
    )
  }
}

export default App
