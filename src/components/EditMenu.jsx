import React, { Component } from "react";

class EditMenu extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.status;
  }

  onClickDeleteButton() {
    this.setState({
      editMenuShowing: true
    });
  }
  render() {
    if (!this.state.editMenuShowing) {
      var visibleContent = (
        <button onClick={() => this.onClickDeleteButton()}>Edit Post</button>
      );
    } else {
      var visibleContent = (
        <div>
          <style>{`
            .edit {
                background-color: yellow;
            }
            .delete {
                background-color: red;
            }
            `}</style>
          <button className="edit">Edit Post</button>
          <button className="delete">Delete Post</button>
        </div>
      );
    }
    console.log(this.state);
    return <div>{visibleContent}</div>;
  }
}
export default EditMenu;
