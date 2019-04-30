import React, { Component } from "react";
import SearchFeed from "./SearchFeed";
import NewPostForm from "./NewPostForm";
import Post from "./Post";
import v4 from "uuid";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.status;
    this.handleAddingNewPost = this.handleAddingNewPost.bind(this);
  }

  onClickAddPost() {
    this.setState({
      creatingNewPost: true
    });
  }

  updateFeedStateFromPost(postToBeChanged) {
    let postListToUpdate = this.state.masterPostList.slice();
    let postIndex = this.findPostIndex(postToBeChanged, postListToBeUpdated);
    postListToUpdate.splice(postIndex, 1, postToBeChanged);

    this.setState({
      masterPostList: postListToUpdate
    }).then(this.props.updateAppState(this.state));
  }

  findPostIndex(post, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (post.id === arr[i].id) {
        return i;
      }
    }
  }

  handleAddingNewPost(postText) {
    let postList = this.state.masterPostList.slice();
    let post = {
      img:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      name: "Name N Namovich",
      text: postText,
      id: v4(),
      EditMenu: {
        editMenuShowing: false
      }
    };
    postList.unshift(post);

    this.setState({
      masterPostList: postList,
      creatingNewPost: false
    });
    setTimeout(() => {
      console.log("new state");
      console.log(this.state.masterPostList);
    }, 0);
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
              status={post}
              updateFeedState={this.updateFeedStateFromPost}
              key={post.id}
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
