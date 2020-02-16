

import { Spinner_Show, Spinner_Hide, Spinner_Toggle, Write_Error} from '../types';

const initialState = {
    loading: false,
    error: {
        code: '',
        message: '',
        redirect: '',
        detail: ''
    }
}


export default function (state = initialState, action) {

    switch (action.type) {

        case Spinner_Show:
            return {
                ...state,
                loading: true
            }
        case Spinner_Hide:
            return {
                ...state,
                loading: false
            }
        case Spinner_Toggle:
            return {
                ...state,
                loading: ! state.loading
            }
        case Write_Error:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }

}