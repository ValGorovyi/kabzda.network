import React from "react";

class Status extends React.Component {
  
  state={
    editMode: false,
    status: this.props.status,
  }

  statusInputRef = React.createRef();

  activateEdidMode() {
    this.setState({
      editMode: true
    })
  }
  diactivateEdidMode() {
    this.setState({
      editMode: false
    })
    this.props.uppdateStatus(this.state.status);
  }
  onStatusChange = (e) => {
    this.setState(
      {status: e.currentTarget.value}
    )
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render(){
    return (
        <div>
          {!this.state.editMode && <div>
            <span onDoubleClick={this.activateEdidMode.bind(this)}> {this.props.status} </span>
          </div>}

          {this.state.editMode && <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.diactivateEdidMode.bind(this)} value={this.state.status}/> 
          </div>}
          
        </div>
      );
  }
}

export default Status;