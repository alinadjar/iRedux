import { DEL_POST, STORE_POST, UPDATE_POST } from '../types';


const initialState = {
    posts: [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
    ]
}

export default function (state = initialState, action) {

    switch (action.type) {

        case STORE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
                //posts: state.posts.concat([action.payload])
            }

        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map(p => p.id === action.payload.id ? action.payload : p)
            }

        case DEL_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.payload.id)
            }

        default:
            return state;
    }

}