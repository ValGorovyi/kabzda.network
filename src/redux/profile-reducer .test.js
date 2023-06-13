import profileReducer, {addPostActionCreater} from "./profile-reducer";
import { render, screen } from '@testing-library/react';

test('add post', () => {
  let action = addPostActionCreater('tobana rot')

  const state = {
    posts: [
      { id: 1, like: '0', dislike: '3', text: 'how are you?' },
      { id: 1, like: '3', dislike: '4', text: 'it is first post' },
      { id: 1, like: '0', dislike: '3', text: 'happy new year' },
      { id: 1, like: '0', dislike: '3', text: '...' },
    ],
    profile: null,
    newPostText: 'idi nah',
    status: '',
  }

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(5)
});

test('message sould be corrected', () => {
  let action = addPostActionCreater('tobana rot')

  const state = {
    posts: [
      { id: 1, like: '0', dislike: '3', text: 'how are you?' },
      { id: 1, like: '3', dislike: '4', text: 'it is first post' },
      { id: 1, like: '0', dislike: '3', text: 'happy new year' },
      { id: 1, like: '0', dislike: '3', text: '...' },
    ],
    profile: null,
    newPostText: 'idi nah',
    status: '',
  }

  let newState = profileReducer(state, action);

  expect(newState.posts[4].text).toBe('tobana rot')
});
