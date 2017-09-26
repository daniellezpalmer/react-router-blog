import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="BaseLayout">

        <NavLink to="/createpost"></NavLink>
        <NavLink to="/postlist"></NavLink>
        <NavLink to="/showpost"></NavLink>

        {this.props.children}
      </div>
    );
  }
}
