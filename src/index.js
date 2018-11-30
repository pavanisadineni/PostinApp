import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import {Route,BrowserRouter,Switch} from 'react-router-dom';

import PostNew from './components/Post_new';
import PostIndex from './components/post_index';
import PostShow from './components/Post_Show';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  
    <BrowserRouter>
    <div>
      <Switch>
      <Route path='/posts/new' component={PostNew}></Route> 
      <Route path='/posts/:id' component={PostShow}></Route>    
      <Route path='/' component={PostIndex}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
