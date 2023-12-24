import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPage={100} />
      <Book name="처음 만난 AWS" numOfPage="300" />
      <Book name="처음 만난 리액트" numOfPage="123" />
    </div>
  );
}

export default Library;