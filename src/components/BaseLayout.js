import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="BaseLayout">

        <NavLink exact to="/">Home
        </NavLink>
        <NavLink exact to="/createpost">Create Post
        </NavLink>
        <NavLink exact to="/postlist">Show Posts
        </NavLink>

        <div>{this.props.children}</div>
      </div>
    );
  }
}
