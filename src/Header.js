import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <img src="https://octodex.github.com/ui/logo.png" />
        <ul>
          <li>RSS</li>
          <li>FAQ</li>
          <li>Back to GitHub</li>
        </ul>
      </header>
    )
  }
}
export default Header
