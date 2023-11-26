import React, {useState, useEffect}from "react";

function StatusHook (props){
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status)
  const activateEdidMode= () => {
    setEditMode(true)
  }
  
  useEffect( () => {
    setStatus(props.status)
  }, [props.status])

  const diactivateEdidMode = () => {
    setEditMode(false);
    props.uppdateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }


    return (
        <div>
          {!editMode && <div>
            <span onDoubleClick={activateEdidMode}> {props.status} </span>
          </div>}

          {editMode && <div>
            <input onChange={onStatusChange} autoFocus={true} onBlur={diactivateEdidMode} value={status}/> 
          </div>}
          
        </div>
      );
  
}

export default StatusHook;