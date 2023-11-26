import React from "react";
import Profile from "./profile";
import {
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom'
import { setUserProfile, savePhoto,getStatus, getUserProfile, uppdateStatus } from "../../redux/profile-reducer";
import { connect } from "react-redux";

class ProfileContainer extends React.Component {


  refreshComponent() {
    let profileId = this.props.router.params.userId;

    if (!profileId) {
      profileId = this.props.authorisedUserId
    }


    this.props.getUserProfile(profileId);
    this.props.getStatus(profileId)

    // aboutId(profileId)
    //   .then(response => {


    //     this.props.setUserProfile(response);
    //     this.props.getStatus(profileId)

    //   });
  }

  componentDidMount() {
    
    this.refreshComponent()
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.router.params.userId !== prevProps.router.params.userId) {
      this.refreshComponent()
    }
  }

  render() {
    return <Profile {...this.props}
     profile={this.props.profile}
     status={this.props.status}
     uppdateStatus={this.props.uppdateStatus} 
     isOwner={!this.props.router.params.userId}
     savePhoto={this.props.savePhoto}/>
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

export default connect(mapStateToProps, { setUserProfile, getStatus, uppdateStatus, getUserProfile, savePhoto })(withRouter(ProfileContainer));
