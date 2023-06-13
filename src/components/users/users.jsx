import React from "react";
import css from './users.module.css';
import { NavLink } from "react-router-dom";
import axios from "axios";


function Users(props) {
  let pagesCound = Math.ceil(props.totalUsersCound / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCound; i++) {
    pages.push(i);
  }
  return (<div>
    <div>
      {pages.map((p,i,a) => {
        return <span className={props.currentPage === p && css.selectedPage}
          onClick={(e) => { props.onPageChanged(p) }}> {
            p === props.currentPage+ 30 || p === props.currentPage - 12  ? '..' :
            p <= props.currentPage + 30 & p >=  props.currentPage- 12 ?
            p : ''}</span>
      })}
    </div>
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
                //ЗДЕСЬ ДОЛЖЕН БЫТЬ ДИСПАТЧ ДЛЯ ДИЗЕЙБЛ КНОПКИ. НО У МЕНЯ НЕ РАБОТАЕТ ЗАПРОС. НАДО ПЛАТНАЯ ПОДПИСКА
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                 {withCredentiale: true,
                  headers:{}})
                .then(response => {
                  if (response.data.resultCode === 0) {
                    props.unFollow(user.id)
                  }
                })
              }}>Follow</button> :
              <button onClick={() => {
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {withCredentiale: true,
                headers:{}})
                .then(response => {
                  if (response.data.resultCode === 0) {
                    props.follow(user.id)
                  }
                })
              }}>UnFollow</button>}
          </div>
          <div className={css.info}>
            <h2 className={css.status}>{'user.status'}</h2>
            <h6 className={css.city}>{'user.city}, {user.country'}</h6>
          </div>
        </div>
      </div>)
    }</div>
  )
}


export default Users;