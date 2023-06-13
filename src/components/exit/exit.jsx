import React from "react";
import { LogOut } from "../../redux/auth-reducer";

function Exit(props) {
  return (
    <div>
      <button onClick={LogOut()}>Log Out</button>
    </div>
  )
}

export default Exit;