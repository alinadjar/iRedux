
import { Spinner_Show, Spinner_Hide, Spinner_Toggle, Write_Error } from '../types';


export const SpinnerShow = () => ({
    type: Spinner_Show
});

export const SpinnerHide = () => ({
    type: Spinner_Hide
});

export const SpinnerToggle = () => ({
    type: Spinner_Toggle
});

export const WriteError= (obj) => ({
    type: Write_Error,
    payload: {
        code: obj.code,
        message: obj.message,
        error: obj.error
    }
});