import { combineReducers } from 'redux';
import stepreducer from '../step/reducer';
import templateReducter from '../template/reducer';
import userReducer from '../userData/reducer';



const rootReducer = combineReducers({
    stepreducer: stepreducer,
    templateReducter: templateReducter,
    userReducer: userReducer,
});

export default rootReducer;