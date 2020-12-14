import { SETSTEP } from './type';

const INITIAL_STATE = {
    step: 0,
};
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SETSTEP:
            return {
                ...state, 
                step: action.payload,
            };
        default: return state;
    }
};

export default reducer;