import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="sticky-nav">
        <img id="logo-image" src='yt-favicon.ico' alt="YouTube logo"/>
        <span className="logo-text">YouTube</span>
        <div className="form-container">
          <form className="form" onSubmit={this.handleSubmit}>
            <input type="text" name="searchInput" placeholder="search"
            onChange={this.handleChange} />
            <button type="submit">
              <i className="material-icons spaced-icons">search</i>
            </button>
          </form>
        </div>
        <div className="spacer"></div>
        <i className="material-icons spaced-icons">list</i>
        <i className="material-icons spaced-icons">offline_bolt</i>
        <i className="material-icons spaced-icons">perm_identity</i>
      </div>
    )
  }
}

export default Navbar;
