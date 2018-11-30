import {FETCH_POSTS,CREATE_POST,FETCH_POST,DELETE_POST} from '../actions/index';
import _ from 'lodash';




export default function postReducer(state={},action){
    switch(action.type){
        case DELETE_POST:
        return _.omit(state,action.payload);
        case FETCH_POSTS:
        return _.mapKeys(action.payload.data,'id');
        case CREATE_POST:
        case FETCH_POST:
        return {...state,[action.payload.data.id]:action.payload.data}
        default:
        return state;
    }
}