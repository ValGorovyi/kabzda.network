import React from "react";
import css from "./post.module.css";
import Post from "./post";
import { useForm } from 'react-hook-form';


function MyPosts(props) {
  const postsElement =
    props.posts.map((post) => {
      return <Post like={post.like} dislike={post.dislike} text={post.text} />
    })

  // let newPostElement = React.createRef();

  // let onAddPost = (text) => {
  //   props.addPost(text);
  // }

  // const onPostChange = () => {
  //   let text = newPostElement.current.value;
  //   props.updateNewPostText(text);
  // }

  return (
    <div className={css.postsBlock}>
      <h3>My posts</h3>
      <div>
        <MyPostsForm addPost={props.addPost} />
        {/* <div>
          <textarea 
          ref={newPostElement} 
          value={props.newPostText}
          onChange={onPostChange}/>
        </div>
        <button onClick={onAddPost}>Add post</button> */}
      </div>

      <div className={css.posts}>
        {postsElement}
      </div>
    </div>
  )
}

function MyPostsForm(props) {


  const { register,
    formState: { errors, isValid }, handleSubmit, reset } = useForm({
      mode: 'onBlur',
      values: {
        newPostText: '',
      },
    })





  const onSubmit = (formData) => {
    props.addPost(formData.newPostText);
    reset();
  }

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} >
      <div>
        <textarea type='newPostText' {...register('newPostText',
          {
            required: 'poleobazatelno zapolnit',
            minLength: 1,
            maxLength: { value: 70, message: 'mnogo. hare' },
          })} />
      </div>
      <div> {errors?.newPostText && <p>{errors?.newPostText?.message || 'eror syka'}</p>}</div>
      <button disabled={!isValid}>Add post</button>
    </form>
  )
}

export default MyPosts;
