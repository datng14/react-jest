import React from "react";
import { connect } from "react-redux";

function CommentList(props) {
  function renderComments() {
    return props.comments.map((comment) => <li>{comment}</li>);
  }
  return (
    <div>
      <ul>{renderComments()}</ul>
    </div>
  );
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
