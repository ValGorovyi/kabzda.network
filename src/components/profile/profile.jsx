import React from "react";
import css from "./profile.module.css";
import MyPostsContainer from "./myPost/myPostsContainer";
import ProfileInfo from "./profileInfo/profileInfo";

const Profile = React.memo((props) => {
  console.log('render');
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} uppdateStatus={props.uppdateStatus}/>
      <MyPostsContainer/>
    </div>
  )
})

export default Profile;

