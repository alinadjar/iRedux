// import Axios from 'axios';
// import { SET_POSTS } from '../types';



// export const FetchPosts = () => {

//     return (dispatch) => {

//         Axios.request({
//             method: 'GET',
//             url: 'https://jsonplaceholder.typicode.com/posts'
//         }).then(response => {

//             console.log(response.data);

//             dispatch({                
//                 type: SET_POSTS,
//                 payload: response.data
//             });


//         }).catch(e => {
//             return false;
//         });
//     }
// }