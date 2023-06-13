import React from "react";
import { Navigate } from 'react-router-dom';
import css from "./dialogs.module.css"
import DialogItem from "./dialogItem/dialogItem";
import Message from './message/message';
import { useForm } from 'react-hook-form';






function Dialogs(props) {

  if (!props.isAuth) {
    return <Navigate to={'/login/'} />
  }

  const dialogs = props.dialogs
    .map((dialog) => {
      return <DialogItem name={dialog.name} id={dialog.id} />
    })


  const messages = props.messages
    .map(message => {
      return <Message text={message.message}
      />
    })


  // let newMessage = React.createRef();

  // const addMessage = () => {
  //   props.addMessage();
  // }

  // const onMessageChange = () => {
  //   let text = newMessage.current.value;
  //   props.onMessageChange(text);
  // }

  return (
    <div className={css.dialogs}>

      <div className={css.dialogsItem}>
        {dialogs}
      </div>

      <div className={css.messages}>
        {messages}
        {/* <div>

          <textarea
            ref={newMessage}
            value={props.newMessage}
            onChange={onMessageChange}
          ></textarea>
          <button onClick={addMessage}>Send Message</button>
        </div> */}
        <MessageForm addMessage={props.addMessage} />
      </div>

    </div>
  )
}

function MessageForm(props) {
  const { register, handleSubmit } = useForm({
    values: {
      newMessageText: '',
    },
  })

  const onSubmit = (formData) => {
    props.addMessage(formData.newMessageText)
  }
  return (
  <form action="" onSubmit={handleSubmit(onSubmit)}>
    <div>

      <textarea type={'newMessageText'} {...register('newMessageText') }
      ></textarea>
      <button >Send Message</button>
    </div>
  </form>
  )

}

export default Dialogs;