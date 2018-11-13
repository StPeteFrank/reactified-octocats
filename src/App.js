import React, { Component } from 'react'

import logo from './logo.svg'
import './App.css'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <body>
        <Header />
        <Main />
        <Footer />
      </body>
    )
  }
}

export default App
