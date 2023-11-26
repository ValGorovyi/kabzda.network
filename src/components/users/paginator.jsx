import React, { useState } from "react";
import css from './users.module.css';


function Paginator({totalItemCount, pageSize, currentPage, onPageChanged, positionSize = 16, positionNumber, setPositionNumb}) {
  let pagesCound = Math.ceil(totalItemCount / pageSize);
  let pages = [];
  // let currentPage = props.currentPage ? props.currentPage : 1

  for (let i = 1; i <= pagesCound; i++) {
    pages.push(i);
  }
  const positionCount = Math.ceil(pagesCound / positionSize)


  const leftBorder = (positionNumber - 1) * positionSize +1
  const rightBorer = positionNumber * positionSize

  // let filteredPages = pages.filter((p) => {
  //   return p < currentPage + size & p >=  currentPage- size
  // })
  return (<>
    <div className={css.paginator}>
      {positionNumber > 1 && <button onClick={ () => setPositionNumb(positionNumber - 1)}>Early</button>}
      
      {pages.filter((p) => p >= leftBorder && p <= rightBorer).map((p) =>
        <span className={currentPage === p && css.selectedPage} onClick={(e) => { onPageChanged(p) }}>{p}</span>)}

      {positionCount > positionNumber && <button onClick={ () => setPositionNumb(positionNumber + 1)}>Next</button>}

      {/* {filteredPages.map ((p) => <span className={currentPage === p && css.selectedPage} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>)} */}


      {/* {pages.map((p,i,a) => p === props.currentPage+ 20 || p === props.currentPage - 12 ?
      <span className={props.currentPage === p && css.selectedPage} onClick={(e) => { props.onPageChanged(p) }}> .. </span> :
       p <= props.currentPage + 20 & p >=  props.currentPage- 12 ? 
      <span className={props.currentPage === p && css.selectedPage} onClick={(e) => { props.onPageChanged(p) }}>{ p}</span> : null
      )} */}
    </div>
  </>
  )
}


export default Paginator;

      // {
      //   return <span className={props.currentPage === p && css.selectedPage}
      //     onClick={(e) => { props.onPageChanged(p) }}> {
      //       p === props.currentPage+ 20 || p === props.currentPage - 12  ? '..' :
      //       p <= props.currentPage + 20 & p >=  props.currentPage- 12 ?
      //       p : null }</span>
      // }