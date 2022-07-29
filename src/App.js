// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

import React, { Component } from 'react'
import NewsItem from './Components/NewsItem';

export class App extends Component {
    render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}

export default App

