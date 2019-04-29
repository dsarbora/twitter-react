import React, { Component } from "react";
import Like from "./Like";
import PropTypes from "prop-types";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    this.handleClickingLike = this.handleClickingLike.bind(this);
  }

  handleClickingLike() {
    this.setState({
      likes: this.state.likes + 1
    });
    // setTimeout(() => {
    //   console.log(this.state.likes);
    // }, 0);
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

    return (
      <div style={border}>
        <img style={image} src={this.props.img} />
        <div>
          <p style={name}>
            <strong>{this.props.name}</strong>
          </p>
          <p style={text}>{this.props.text}</p>
          <p>Likes: {this.state.likes}</p>
          <div>
            <Like onClickLike={this.handleClickingLike} />
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
