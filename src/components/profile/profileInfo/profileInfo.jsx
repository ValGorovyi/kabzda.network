import React, { useState } from "react";
import Preloader from "../../../common/preloader/preloader";
import StatusHook from "./status/statusHook";
import css from "./profileInfo.module.css";
import {useForm} from 'react-hook-form';
import { authAPI } from "../../users/api/api";

function ProfileInfo(props){

  let [editMode, setEditMode] = useState(false)


    if (!props.profile) {
      return <Preloader />

    }

    const onMainPhotoSelected = (e) => {
      if(e.target.files.length) {
        props.savePhoto(e.target.files[0])
      }
    }


    const goToSetEditMode = () => {
      setEditMode(true)
    }

    return (
      <div>
        {/* <div>
          <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"/>
        </div> */}
        <div className={css.descriptionBlock}>
          <img className={css.profileAva} src={props.profile.photos.large ||
          'https://yt3.googleusercontent.com/ytc/AL5GRJW4mKvEbdtLq23hf93l6eWzuBq0Uldgg5-95FDmCg=s900-c-k-c0x00ffffff-no-rj'
         } alt="" />
         {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
          <h1>{props.profile.fullName}</h1>
          <h3>{props.profile.aboutMe}</h3>
          {editMode ? <ProfileInfoForm/> : <Contacts setEditMode={goToSetEditMode} props={props.profile}/>}
          
          <StatusHook status={props.status} uppdateStatus={props.uppdateStatus}/>
        </div>
      </div>
    );
  }


function Contacts(props) {



  const sotialNetworks = Object.keys(props.props.contacts)
  let contacts = props.props.contacts
  return (<>
  <button onClick={props.setEditMode}>edit Mode!</button>
  <h3>Looking For A Job {props.lookingForAJob}</h3>
  <h3>About me {props.aboutMe}</h3>
  <ul>
    {sotialNetworks.map((network) => <div><li>{network}: {contacts[network]}</li></div>)}
    </ul>
    </>)
}

function ProfileInfoForm() {
  const {register, handleSubmit} = useForm()
  const onSubmit = async (formData) => {
    console.log(formData);
    let response = await authAPI.putContacts(formData)
    console.log(response);
  }
  return(
    <>
    <form onSubmit={handleSubmit(onSubmit)} action="">
      <div>
        <div>
        <input type="text" placeholder="facebook" {...register('facebook')}/></div>
        <div>
        <input type="text" placeholder="website" {...register('website')}/></div>
        <div>
        <input type="text" placeholder="vk" {...register('vk')}/></div>
        <div>
        <input type="text" placeholder="twitter" {...register('twitter')}/></div>
        <div>
        <input type="text" placeholder="instagram" {...register('instagram')}/></div>
        <div>
        <input type="text" placeholder="youtube" {...register('youtube')}/></div>
        <div>
        <input type="text" placeholder="github" {...register('github')}/></div>
       <div>
        <input type="text" placeholder="mainLink" {...register('mainLink')}/></div>
        <button>Go!</button>
      </div>
    </form>
    </>
  )
}

export default ProfileInfo;
