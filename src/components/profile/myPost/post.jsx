import React from "react";
import css from "./post.module.css";

function Post( props ) {
  return (
    <div className={css.posts}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXGU_RvuIinqB9mlWUdDnAfrKjZzwKXE7x3w&usqp=CAU" />
      {props.text}
            <div>
          <p>like {props.like}</p>
          <p> dislike {props.dislike}</p>
      </div>
    </div>
  );
}

export default Post;
