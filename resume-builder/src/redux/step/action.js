import { SETSTEP } from './type';

export const setStep = (step) => {
    return {
        type: SETSTEP,
        payload: step
    };
};