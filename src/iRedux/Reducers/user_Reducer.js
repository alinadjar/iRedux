import { GET_SINGLE_USER, GET_ALL_USERS } from '../types';
import { initialData_users } from '../InitialData/InitData_users';

export default function (state = initialData_users, action) {
    switch (action.type) {
        case GET_SINGLE_USER:
            return {
                ...state,
                data: state.data.filter(r => r.id === Number(action.payload))
            }
        case GET_ALL_USERS:
            return state.users;
        //default: return state || initialData_users.data;
        default:
            return state;
    }
}