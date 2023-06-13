// import React from "react";
import css from "./dialogs.module.css";
import Dialogs from "./dialogs";
import {
  uppdateMessageChangeActionCreater,
  sendMessageCreater,
} from "../../redux/dialogs-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { connect } from "react-redux";
import { compose } from "redux";

// function DialogsContainer() {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const addMessage = () => {
//           store.dispatch(sendMessageCreater());
//         };

//         const onMessageChange = (text) => {
//           store.dispatch(uppdateMessageChangeActionCreater(text));
//         };
//         return (
//           <Dialogs
//             messages={store.getState().dialogs.messagesData}
//             dialogs={store.getState().dialogs.dialogsData}
//             newMessage={store.getState().dialogs.newMessage}

//             addMessage={addMessage}
//             onMessageChange={onMessageChange}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
//   //   <div className={css.dialogs}>

//   //       <div className={css.dialogsItem}>
//   //       { dialogs }
//   //     </div>

//   //     <div className={css.messages}>
//   //       { messages }
//   //     <div>

//   //       <textarea
//   //       ref={newMessage}
//   //       value={props.dialogs.newMessage}
//   //       onChange={onMessageChange}
//   //       ></textarea>
//   //       <button onClick={addMessage}>Send Message</button>
//   //     </div>
//   //     </div>

//   //   </div>
// }

const MapStateToProps = (state) => {
  return {
    messages: state.dialogs.messagesData,
    dialogs: state.dialogs.dialogsData,
    newMessage: state.dialogs.newMessage,
  }
}

const MapDispatchToProps = (dispatch) => {
  return {

    addMessage: (newMessageText) => {
      dispatch(sendMessageCreater(newMessageText));
    },
  }
}


export default compose(
  connect(MapStateToProps, MapDispatchToProps),
  withAuthRedirect
)(Dialogs);
