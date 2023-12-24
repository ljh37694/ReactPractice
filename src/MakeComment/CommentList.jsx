import React from "react";
import Comment from "./Comment";

const comments = [
  { name: "이정훈", comment: "하이요", },
  { name: "유지민", comment: "Rocket Puncher!"},
  { name: "설윤아", comment: "하하"},
];

function CommentList() {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
    </div>
  );
}

export default CommentList;