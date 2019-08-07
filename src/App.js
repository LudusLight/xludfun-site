import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'

import Home from './pages/home'
import Add from './pages/add'
import Login from './pages/features'
import Dashboard from './pages/dashboard'
import Features from './pages/features'
import Stream from './pages/stream'
import NotFound from './pages/notFound'

console.log('this is react')

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/join" component={Add} />
              <Route path="/info" component={Login} />
            </Switch>

            {/*<hr /><p className="align-right">
              This site is open source.{' '}
              <a
                target="_blank"
                href="https://github.com/BrandonDyer64/Zero-Landing"
              >
                Improve this page
              </a>.
            </p>*/}
          </div>
        </div>
      </Router>
    )
  }
}

export default App
