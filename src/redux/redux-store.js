import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import appReducer from "./app-reducer";



const reducers = combineReducers({
  profilePage: profileReducer,
  dialogs: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;