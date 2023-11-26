import React from "react";
import preloader from '../../img/vgif-ru-27253.gif'
import css from './preloader.module.css'

const Preloader = (props) => {
  return <div >
          <img className={css.preloader} src={preloader} alt="" />
        </div>
}
export default Preloader

