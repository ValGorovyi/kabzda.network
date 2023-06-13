// import React from "react";
import { connect } from "react-redux";
import {
  onPostChangeActionCreater,
  addPostActionCreater,
} from "../../../redux/profile-reducer";
// import store from "../../../redux/redux-store";
// import StoreContext from "../../../redux/storeContext";
// import Dialogs from "../../dialogs/dialogs";
import MyPosts from './myPosts';

// function MyPostsContainer() {
//   // let addPost = () => {
//   //   props.store.dispatch(addPostActionCreater());
//   // }

//   // const onPostChange = (text) => {
//   //   const action = onPostChangeActionCreater(text);
//   //   props.store.dispatch(action);
//   return (
//     <StoreContext.Consumer>
//       {store => {
//         let addPost = () => {
//           store.dispatch(addPostActionCreater());
//         };

//         const onPostChange = (text) => {
//           const action = onPostChangeActionCreater(text);
//           store.dispatch(action);
//         };

//         return (
//           <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={store.getState().profilePage.posts}
//             newPostText={store.getState().profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// }

const MapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      const action = onPostChangeActionCreater(text);
      dispatch(action);
    },
    addPost: (text) => {
      dispatch(addPostActionCreater(text));
    },
  }
}

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)

export default MyPostsContainer;
