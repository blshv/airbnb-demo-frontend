import React, { Component } from 'react';
import Header from './Header';
import Explore from './Explore';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Header />
        <Explore />
      </main>
    )
  }
}

export default App;
