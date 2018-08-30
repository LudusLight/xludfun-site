import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const { globals } = require('../../globals')
const configLocal = require('../../config.local.json')

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: {},
      config: '{\n}'
    }
    const url = configLocal.apiHost + '/getconfig/' + globals.guildId
    console.log(url)
    axios.get(url).then(res => {
      this.setState({ config: JSON.stringify(res.data, true, 2) })
    })
  }
  render() {
    return (
      <div>
        <h3>Dashboard</h3>
        <pre>{this.state.config}</pre>
      </div>
    )
  }
}

export default App
