import React, { Component } from 'react'

class Octocat extends Component {
  render() {
    return (
      <div class="img-container">
        <div class="img-shell">
          <a>
            <img src={this.props.image} />
          </a>
        </div>
        <div class="shell-footer">
          <p class="number">{this.props.number}</p>
          <div class="author-info">
            <p class="author-by">
              <span>the </span>
              <span class="cat-name">{this.props.catName} </span>
              <span>by </span>
            </p>
            <img src={this.props.imageAuthor} />
          </div>
        </div>
      </div>
    )
  }
}
export default Octocat
