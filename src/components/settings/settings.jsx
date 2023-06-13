import React from "react";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { connect } from "react-redux";
import { compose } from "redux";


function SettingsComponent(params) {
  return (
    <div>
      Settings
    </div>
  )
}



export default compose(
  connect(),
  withAuthRedirect
)(SettingsComponent);