const SEND_MESSAGE = 'SEND_MESSAGE';
const UPPDATE_NEW_MESSAGE_TEXT = 'UPPDATE_NEW_MESSEGE_TEXT';

export const uppdateMessageChangeActionCreater = (message) => {
  return {
    type: UPPDATE_NEW_MESSAGE_TEXT, message: message,
  }
}

export const sendMessageCreater = (newMessage) => {
  return {
    type: SEND_MESSAGE,
    newMessage
  }
}

const initialState = {
  newMessage: '',
  messagesData: [
    { id: '1', message: 'doopa', },
    { id: '1', message: 'Hello', },
    { id: '1', message: 'how', },
  ],
  dialogsData: [
    { id: 'Prok', name: 'Prok', },
    { id: 'Crocodile', name: 'Crocodile', },
    { id: 'Elephan', name: 'Elephan', },
    { id: 'Pig', name: 'Pig', },

  ]
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return { ...state ,
      messagesData: [...state.messagesData, {id: 2, message: action.newMessage,}],
      dialogsData: [...state.dialogsData],
      }

    } case UPPDATE_NEW_MESSAGE_TEXT: {
      return { 
        ...state ,
        newMessage: action.message,
      }
    } default: return state;
  }
}

export default dialogsReducer;