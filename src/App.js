import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import ProfileContainer from "./components/profile/profileContainer";
import DialogsContainer from "./components/dialogs/dialogsContainer";
import Friends from "./components/friends/friends";
import Settings from "./components/settings/settings";
import Exit from "./components/exit/exit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersContainer from "./components/users/usersContainer";
import HeaderContainer from "./components/header/headerContainer";
import Login from "./components/login/login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { compose } from "redux";
import Preloader from "./common/preloader/preloader";


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="content">
            <Routes>

              <Route path="/profile/" element={<ProfileContainer isMain={true} />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />

              <Route path="/login/" element={<Login />} />

              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/exit" element={<Exit />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(connect(mapStateToProps, { initializeApp }))(App);
