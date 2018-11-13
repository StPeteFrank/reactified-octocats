import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="footer-border">
          <div class="footer-left">
            <ul>
              <li>RSS</li>
              <li>FAQ</li>
            </ul>
          </div>

          <i class="fab fa-github" />

          <div class="footer-right">
            <p>&copy; 2013 - 2018 GitHub, Inc.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
