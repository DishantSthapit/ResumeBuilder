import { SETUSER } from './type';

export const setUser = (user) => {
    return {
        type: SETUSER,
        payload: user
    }
} 