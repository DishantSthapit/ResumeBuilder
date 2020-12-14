import {ADDTEMPLATE} from './type';

export const setTemplate = (templateNo) => {
    return {
        type: ADDTEMPLATE,
        payload: templateNo
    }
} 