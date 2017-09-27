import React, {Component} from 'react';
import '../styles/App.css';
import {NavLink} from 'react-router-dom';

class App extends Component {
  render() {

let body = {
  textDecoration:"none",

}

let nav = {
  textDecoration:"none",
  fontSize:20,
  borderRadius:4,
  border:"ridge",
  borderWidth:2,
  color:"black",
  backgroundColor:"grey",
  padding:5
}

let bttn = {
fontSize:20,
borderRadius:4
}

    return (
      <div style={body} className="App">
        <p><h1>Welcome to my blog!</h1></p>

        <p><h2>
          <NavLink style={nav} to='./createpost'>
          <button style={bttn}>
            Head to the create post page to get started!
          </button>
          </NavLink>
        </h2></p>
      </div>
    );
  }
}

export default App;
