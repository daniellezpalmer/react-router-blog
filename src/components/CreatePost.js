import React, {Component} from 'react';

export default class CreatePost extends Component {
  "use strict";
  constructor(props) {
    super(props);

    this.addToList = this.addToList.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      authorName: '',
      blogTitle: '',
      blogEntry: ''
    }
  }

  handleChange = e => {
    e.preventDefault();
    console.log(e.target);
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  addToList = (e) => {
    e.preventDefault();
    this.setState({authorName: e.target.value, blogTitle: e.target.value, blogEntry: e.target.value});
    this.props.history.push('/postlist');
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });

    this.setState({authorName: '', blogTitle: '', blogEntry: ''});
  }

  render() {
    return (
      <div className="CreatePost">
        <form onSubmit={this.addToList}>
          <label>Author:
          </label>
          <input type='text' id="authorName" value={this.state.authorName} onChange={this.handleChange}></input>
          <br></br>
          <label>Title:
          </label>
          <input type='text' id="blogTitle" value={this.state.blogTitle} onChange={this.handleChange}></input>
          <br></br>
          <label>Entry:
          </label>
          <textarea type='text' id="blogEntry" value={this.state.blogEntry} onChange={this.handleChange}></textarea>
          <br></br>
          <button type="button" onClick={this.addToList}>Add to list</button>
        </form>
      </div>
    );
  }
}
