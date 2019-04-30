import React, { Component } from "react";
import Navbar from "./Navbar";
import Badge from "./Badge";
import Bio from "./Bio";
import Feed from "./Feed";
import FriendList from "./FriendList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Feed: {
        masterPostList: [],
        creatingNewPost: false,
        stateObjectWorks: false
      }
    };
    this.updateAppFromFeed = this.updateAppFromFeed.bind(this);
  }

  updateAppFromFeed(newStateObject) {
    console.log(newStateObject);
    this.setState({
      Feed: newStateObject
    });
    setTimeout(() => {
      console.log(this.state);
    }, 0);
  }

  render() {
    let columns = {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      marginLeft: "25px",
      marginRight: "25px"
    };
    return (
      <div>
        <Navbar />
        <div style={columns}>
          <div>
            <Badge />
            <Bio />
          </div>
          <div>
            <Feed
              status={this.state.Feed}
              updateAppState={this.updateAppFromFeed}
            />
          </div>
          <div>
            <FriendList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
