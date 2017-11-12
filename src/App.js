import React, {Component} from 'react';
import Header from './Header';
import Explore from './Explore';
import 'normalize.css';
import './styled';

class App extends Component {
  render () {
    return (
      <main>
        <Header />
        <div className="container">
          <div className="main">
            <Explore />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
