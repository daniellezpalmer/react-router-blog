import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {

let body = {
  fontFamily:"Karla"
}

let nav = {
textDecoration:"none",
color:"black"
}

let anav = {
color:"grey"
}

let navs = {
display:"flex",
justifyContent:"space-around",
margin:20,
fontSize:20
}

let hover = {
  border:"dotted"
}

return (
      <div style={body} className="BaseLayout">
        <div style={navs}>
        <NavLink style={nav} activeStyle={anav} hoverStyle={hover} exact to="/">Home
        </NavLink>
        <NavLink style={nav} activeStyle={anav} exact to="/createpost"> Create Post
        </NavLink>
        <NavLink style={nav} activeStyle={anav} exact to="/postlist"> Show Posts
        </NavLink>
      </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
