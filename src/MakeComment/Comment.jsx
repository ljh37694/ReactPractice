import React from "react";

const stylse = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },

  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 16,
  },
};

function Comment(props) {
  return (
    <div style={stylse.wrapper}>
      <div style={stylse.imageContainer}>
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" 
            style={stylse.image}
        />
      </div>

      <div style={stylse.contentContainer}>
        <span style={stylse.nameText}>{props.name}</span>
        <span style={stylse.commentText}>{props.comment}</span>
      </div>
    </div>
  );
}

export default Comment;