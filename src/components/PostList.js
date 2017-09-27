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

let ugh = {
  margin:30
}

let nav = {
color:"black",
textDecoration:"none",
fontSize:"40",
border:"ridge",
borderColor:"grey",
borderRadius:4,
padding:10,
margin:"40px 10px 40px 10px"
}

      return (
        <div style={ugh} key={index}>
          <NavLink style={nav} to={`/showpost/${post._id}`}>Title: {post.blogTitle}</NavLink>
        </div>
      )
    })

    let post = {
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"center"
    }

    return (
      <div style={post} className="PostList">
        {posts}
      </div>
    );
  }
}
