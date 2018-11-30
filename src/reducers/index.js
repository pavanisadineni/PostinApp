import { combineReducers } from 'redux';
import postReducer from './reducers_posts';
import {reducer as formReducer} from 'redux-form';
const rootReducer = combineReducers({
  form:formReducer,
  posts:postReducer,

});

export default rootReducer;
