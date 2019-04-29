import React from "react";
import PropTypes from "prop-types";

function Like(props) {
  return <button onClick={() => props.onClickLike()}>Like</button>;
}

Like.propTypes = {
  onClickLike: PropTypes.func
};

export default Like;
