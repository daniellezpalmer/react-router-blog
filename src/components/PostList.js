import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class PostList extends Component {
  "use strict";
   constructor(props){
     super(props);

    this.state = {
  posts: []
}
};
componentDidMount() {
       fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
           return results.json();
       }).then(data => {
           this.setState({ posts: data });
       })
   }

  render() {

    let posts = this.state.posts.map((post, index) => {
      return (
        <div key={index}>
          <NavLink to={`/showpost/${post._id}`}>Blog Title: {post.blogTitle}</NavLink>
        </div>
      )
    })

    return (
      <div className="PostList">
        {posts}
      </div>
    );
  }
}
