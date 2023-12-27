import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments
    ? comments.map((c) => <li key={c.id}>{c.content}</li>)
    : null;

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
