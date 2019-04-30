import React, { Component } from "react";
import Like from "./Like";
import PropTypes from "prop-types";
import EditMenu from "./EditMenu";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.status;
    this.handleClickingLike = this.handleClickingLike.bind(this);
  }

  handleClickingLike() {
    this.setState({
      likes: this.state.likes + 1
    });
    setTimeout(() => {
      this.props.updateFeedState(this.state);
    }, 0);
  }

  render() {
    let image = {
      width: "50px",
      height: "50px",
      float: "left",
      padding: "0 10px 0 10px",
      marginTop: "15px"
    };
    let text = {
      paddingLeft: "10px",
      marginTop: "-10px"
    };
    let border = {
      border: "1px solid lightgray",
      display: "grid",
      gridTemplateColumns: "1fr 4fr"
    };
    let name = {
      marginLeft: "10px"
    };
    console.log("this");
    console.log(this.state);
    return (
      <div style={border}>
        <style>{`
      .left {
        float: left;
      }
      .right {
        float: right;
        margin-right: 100px;
      }
      `}</style>
        <img style={image} src={this.state.img} />
        <div>
          <p style={name}>
            <strong>{this.state.name}</strong>
          </p>
          <p style={text}>{this.state.text}</p>
          <p>Likes: {this.state.likes}</p>
          <div>
            <div className="left">
              <Like onClickLike={this.handleClickingLike} />
            </div>
            <div className="right">
              <EditMenu status={this.state.EditMenu} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string
};

export default Post;
