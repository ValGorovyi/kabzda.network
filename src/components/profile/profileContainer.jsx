import React from "react";
import Profile from "./profile";
import axios from "axios";
import {
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom'
import { setUserProfile } from "../../redux/profile-reducer";
import { getStatus, uppdateStatus } from "../../redux/profile-reducer"; 
import { connect } from "react-redux";

class ProfileContainer extends React.Component {

  componentDidMount() {

    let profileId = this.props.router.params.userId;

    if(!profileId) {
      profileId = this.props.authorisedUserId
    }
    //Создаём переменную которая равна значению URL параметра из браузерной строки,параметр (userId) по имени должен совпадать с тем,что вы написали в App.js //(<Route path='/profile_content/:userId*' element={<ProfileContainer  />} />) ,у меня допустим userId.

    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + profileId).then(response => {

      //Через конкатенацию строк (+) добавляем значение переменной в конец строки запроса

      this.props.setUserProfile(response.data);
      this.props.getStatus(profileId)

    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} uppdateStatus={this.props.uppdateStatus}/>
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId
  }
}

function withRouter(Component) {

  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { setUserProfile, getStatus, uppdateStatus })(withRouter(ProfileContainer));

