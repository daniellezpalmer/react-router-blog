import React, {Component} from 'react';
import '../styles/App.css';
import {NavLink} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to my blog!</h1>
        <h2>
          <NavLink to='./createpost'>
            Head to the create post page to get started!
          </NavLink>
        </h2>
      </div>
    );
  }
}

export default App;
