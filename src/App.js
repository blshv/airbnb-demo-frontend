import React, { Component } from 'react';
import Header from './Header';
import Explore from './Explore';
import 'normalize.css';
import 'flexboxgrid2';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Explore />
      </main>
    )
  }
}

export default App;
