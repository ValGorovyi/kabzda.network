import React from "react";
import Header from "./header";
import { connect } from "react-redux";
import {  getAuthUserData } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);