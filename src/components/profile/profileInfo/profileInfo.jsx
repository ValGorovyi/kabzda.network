import React from "react";
import Preloader from "../../../common/preloader/preloader";
import StatusHook from "./statusHook";
import css from "./profileInfo.module.css"


// function ProfileInfo(props) {
//   if (!props.profile) {
//     return <Preloader/>
//   }
//   let status
//   axios.get('https://social-network.samuraijs.com/api/1.0/profile/status/3').then(response => {
//   status = response.data;
//   console.log(status);
//   //Через конкатенацию строк (+) добавляем значение переменной в конец строки запроса

// });
// console.log(status);
//     return (
//       <div>
//         {/* <div>
//           <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"/>
//         </div> */}
//         <div className={css.descriptionBlock}>
//         <img className={css.profileAva} src={props.profile.photos.large} alt="" />
//           <h1>{props.profile.fullName}</h1>
//           <h3>{props.profile.aboutMe}</h3>
//         <Status status={status}/>
//         </div>
//       </div>
//     );
// }

class ProfileInfo extends React.Component {


  render() {
    console.log(this.props.uppdateStatus);

    if (!this.props.profile) {
      return <Preloader />
    }

    return (
      <div>
        {/* <div>
          <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"/>
        </div> */}
        <div className={css.descriptionBlock}>
          <img className={css.profileAva} src={this.props.profile.photos.large} alt="" />
          <h1>{this.props.profile.fullName}</h1>
          <h3>{this.props.profile.aboutMe}</h3>
          <StatusHook status={this.props.status} uppdateStatus={this.props.uppdateStatus}/>
        </div>
      </div>
    );
  }
}


export default ProfileInfo;
