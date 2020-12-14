import { ADDTEMPLATE } from './type';

const INITIAL_STATE = {
    templateNo: null,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADDTEMPLATE:
            return {
                ...state, 
                templateNo: action.payload,
            };
        default: return state;
    }
};

export default reducer;