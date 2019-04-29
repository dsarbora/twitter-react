import React from "react";
import v4 from "uuid";

import PropTypes from "prop-types";

function NewPostForm(props) {
  let _text = null;
  function clickFormSubmit(event) {
    event.preventDefault();
    props.onFormSubmission(_text.value);
    _text.value = "";
  }
  return (
    <div>
      <style>{`
            input{
                padding: 10px;
                width: 200px;
            }
            button{
                padding: 10px;
                width: 75px;
                color: white;
                background-color: rgb(79, 127, 204);
            }
        `}</style>
      <form onSubmit={clickFormSubmit}>
        <input
          type="text"
          placeholder="Type what's on your mind"
          id="text"
          ref={input => {
            _text = input;
          }}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
  onFormSubmission: PropTypes.func
};

export default NewPostForm;
