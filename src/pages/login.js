import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const { globals } = require('../globals')
const configLocal = require('../config.local.json')

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: {}
    }
    // Bind `this`
    this.submit = this.submit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.checkLogin = this.checkLogin.bind(this)
    // Auto Sign In
    if (globals.token) {
      const token = globals.token
      this.checkLogin(token)
    }
  }
  submit() {
    const token = this.state.values.token
    this.checkLogin(token)
  }
  checkLogin(token) {
    console.log('fetching ' + token)
    const url = configLocal.apiHost + '/signin/' + token
    console.log(url)
    axios.get(url).then(res => {
      console.log(res)
      if (res.data.valid) {
        globals.token = token
        globals.guildId = token.split('G')[0]
        localStorage.setItem('token', token)
        this.props.history.push('/dashboard')
      }
    })
  }
  handleChange(event) {
    this.setState({ values: { [event.target.name]: event.target.value } })
  }
  render() {
    return (
      <div className="form-container">
        <h3>Sign In</h3>
        <div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="token"
              aria-describedby="emailHelp"
              placeholder="Sign In Token"
              onChange={this.handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              DMed from the bot. Run <code>;auth</code> in your server.
            </small>
          </div>
          <Link className="btn btn-link" to="/">
            Cancel
          </Link>
          <button
            className="btn btn-primary"
            style={{ float: 'right' }}
            onClick={this.submit}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default App
