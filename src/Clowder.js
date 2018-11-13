import React, { Component } from 'react'

class Clowder extends Component {
  render() {
    return (
      <div class="img-container">
        <div class="img-shell">
          <a>
            <img src="https://octodex.github.com//images/benevocats.png" />
          </a>
        </div>
        <div class="shell-footer">
          <p class="number">#6</p>
          <div class="author-info">
            <p class="author-by">
              <span>the </span>
              <span class="cat-name">Benevocat </span>
              <span>by </span>
            </p>
            <img src="https://github.com/cameronmcefee.png" />
          </div>
        </div>
      </div>
    )
  }
}
export default Clowder
