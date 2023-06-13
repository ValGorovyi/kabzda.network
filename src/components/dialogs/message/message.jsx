import React from "react";
import css from "../dialogs.module.css"

const Message = (props) =>{
  return(
    <div className={css.message}>{props.text}</div>
  )
}

export default Message;