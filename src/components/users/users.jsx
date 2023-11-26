import React,{useState} from "react";
import css from './users.module.css';
import { NavLink } from "react-router-dom";
import Paginator from "./paginator";
import { followUnFollowAPI } from './api/api';


function Users(props) {

  const [positionNumber, setPositionNumb] = useState(1)


  const paginator =     <Paginator currentPage={props.currentPage}
  positionNumber={positionNumber}
  setPositionNumb={setPositionNumb}
  totalItemCount={props.totalUsersCound}
  pageSize={props.pageSize}
  onPageChanged={props.onPageChanged} /> 


  return (<div>
    {paginator}
    {
      props.users.map(user => <div key={user.id}>
        <div className={css.users}>
          <div className={css.img_btn}>
            <div>
              <NavLink to={`/profile/${user.id}`}>
                <img src={user.photos.small != null ? user.photos.small : 'https://yt3.googleusercontent.com/ytc/AL5GRJW4mKvEbdtLq23hf93l6eWzuBq0Uldgg5-95FDmCg=s900-c-k-c0x00ffffff-no-rj'} />
              </NavLink>
              <h3>{user.name}</h3>
            </div>
            {user.followed ?
              <button onClick={() => {
                followUnFollowAPI.unFollow(user.id)
                  .then(response => {
                    if (response.resultCode === 0) {
                      props.unFollow(user.id)
                    }
                  })
              }}>unFollow</button> :
              <button onClick={() => {
                followUnFollowAPI.follow(user.id)
                  .then(response => {
                    if (response.resultCode === 0) {
                      props.follow(user.id)
                    }
                  })
              }}>Follow</button>}
          </div>
          <div className={css.info}>
            <h2 className={css.status}>{'user.status'}</h2>
            <h6 className={css.city}>{'user.city}, {user.country'}</h6>
          </div>
        </div>
      </div>)
    }
    {paginator}
  </div>
  )
}


export default Users;