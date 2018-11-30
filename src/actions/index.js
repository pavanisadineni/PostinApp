import axios from 'axios';
export const FETCH_POSTS="FETCH_POSTS";
export const CREATE_POST="CREATE_POST";
export const FETCH_POST="fetch_post";
export const DELETE_POST="delete_post";
const Root_Url="http://reduxblog.herokuapp.com/api";
const Api_Key='?key=pavani448satish';

export function fetch_posts(){
const request=axios.get(`${Root_Url}/posts${Api_Key}`);

return {
    type:FETCH_POSTS,
    payload:request
}
}

export function createPost(values,callBack){

const postReq=axios.post(`${Root_Url}/posts${Api_Key}`,values)
.then(()=>callBack());
//Which takes two args one is URL data another 
//one is Values OBJect from User entered data

return {
    type:CREATE_POST,
    payload:postReq
}
}

export function fetch_post(id){
    const fetch_post=axios.get(`${Root_Url}/posts${id}`);

    return {
        type:FETCH_POST,
        payload:fetch_post
    }

}

export function deletePost(id,callBack){
    const delete_post=axios.delete(`${Root_Url}/posts/${id}${Api_Key}`).then(()=>callBack());

    return {
        type:DELETE_POST,
        payload:id
    }
}