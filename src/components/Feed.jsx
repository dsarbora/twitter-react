import React, { Component } from "react";
import SearchFeed from "./SearchFeed";
import NewPostForm from "./NewPostForm";
import Post from "./Post";
import v4 from "uuid";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterPostList: [],
      creatingNewPost: false
    };
    this.handleAddingNewPost = this.handleAddingNewPost.bind(this);
  }

  onClickAddPost() {
    this.setState({
      creatingNewPost: true
    });
  }

  handleAddingNewPost(postText) {
    let postList = this.state.masterPostList.slice();
    let post = {
      img:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      name: "Name N Namovich",
      text: postText,
      id: v4()
    };
    postList.unshift(post);

    this.setState({
      masterPostList: postList,
      creatingNewPost: false
    });
    console.log(this.state.masterPostList);
  }

  render() {
    let container = {
      border: "2px solid lightgray",
      width: "300px"
    };
    var visibleContent;
    if (!this.state.creatingNewPost) {
      visibleContent = (
        <div>
          <style>{`
            button {
              padding: 10px;
              border-radius: 5px;
            }
          `}</style>
          <SearchFeed />
          <button onClick={() => this.onClickAddPost()}>Create Post</button>
          {this.state.masterPostList.map(post => (
            <Post
              name={post.name}
              img={post.img}
              text={post.text}
              key={post.id}
              id={post.id}
              likes={0}
            />
          ))}
        </div>
      );
    } else {
      visibleContent = (
        <NewPostForm onFormSubmission={this.handleAddingNewPost} />
      );
    }
    return <div style={container}>{visibleContent}</div>;
  }
}

export default Feed;
