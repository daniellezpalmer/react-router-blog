import React, {Component} from 'react';

export default class ShowPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'post': []
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    const url = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
    fetch(url).then(results => results.json()).then(data => {
      this.setState({post: data})
    }).catch(error => {
      console.log("Error with Fetching : ", error);
    });
  }

  render() {
    return (

      <div className="ShowPost">
        <p>Posted by: {this.state.post.authorName}</p>
        <p>Title: {this.state.post.blogTitle}</p>
        <p>
          Post: {this.state.post.blogEntry}</p>
      </div>
    );
  }
}
