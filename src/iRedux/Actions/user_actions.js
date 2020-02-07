
import { GET_SINGLE_USER, GET_ALL_USERS} from '../types';

export const getUser = (userID) => {
    type: GET_SINGLE_USER
    payload: userID
}

export const getAllUsers = () => {
    type: GET_ALL_USERS    
}