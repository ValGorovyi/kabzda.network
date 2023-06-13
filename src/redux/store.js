import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

// const ADD_POST = 'ADD-POST';
// const UPPDATE_NEW_POST_TEXT = 'UPPDATE-NEW-POST-TEXT';

// const SEND_MESSAGE = 'SEND_MESSAGE';
// const UPPDATE_NEW_MESSAGE_TEXT = 'UPPDATE_NEW_MESSEGE_TEXT';






const store = {
  _state: {
    profilePage: { 
      posts:[
      { id: 1, like: '0', dislike: '3', text: 'how are you?'},
      { id: 1, like: '3', dislike: '4', text: 'it is first post'},
      { id: 1, like: '0', dislike: '3', text: 'qwert'},
      { id: 1, like: '0', dislike: '3', text: 'happy new year'},
      { id: 1, like: '0', dislike: '3', text: '...'},
    ], 
    newPostText: 'idi nah',
  },
    
    dialogs:{ 
      newMessage: 'pishu syka',
       messagesData: [
        {id: '1',  message: 'doopa',},
        {id: '1', message: 'Hello',},
        {id: '1', message: 'how',},
      ],
      dialogsData: [
        {id: 'Prok', name: 'Prok',},
        {id: 'Crocodile', name: 'Crocodile',},
        {id: 'Elephan', name: 'Elephan',},
        {id: 'Pig', name: 'Pig',},
        
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber () {
    console.log('suka');
  },
  dispatch (action) {
  this._state.profilePage = profileReducer(this._state.profilePage, action);
  this._state.dialogs = dialogsReducer(this._state.dialogs, action);
  
  this._callSubscriber(this._state)

    // if (action.type === ADD_POST) {

    //   const post = {
    //     id: 2,
    //     like: '0',
    //     dislike: 5,
    //     text: this._state.profilePage.newPostText
    //   };
    //   this._state.profilePage.posts.push(post)
    //   this._state.profilePage.newPostText = '';
    //   this._callSubscriber(this._state);
    
    // } else if (action.type === UPPDATE_NEW_POST_TEXT) {

    //   this._state.profilePage.newPostText = action.newText;
    //   this._callSubscriber(this._state);

    // } else if (action.type === SEND_MESSAGE) {

    //   const message = {
    //     id: 2, 
    //     message: this._state.dialogs.newMessage,
    //   }
    //   this._state.dialogs.messagesData.push(message);
    //   this._state.dialogs.newMessage = '';
    //   this._callSubscriber(this._state);
    
    // } else if (action.type === UPPDATE_NEW_MESSAGE_TEXT) {

    //   this._state.dialogs.newMessage = action.message;
    //   this._callSubscriber(this._state);
    // }
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  }
}


export default store;
window.store = store;