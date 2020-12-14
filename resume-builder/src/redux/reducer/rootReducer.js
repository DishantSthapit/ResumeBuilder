import { combineReducers } from 'redux';
import stepreducer from '../step/reducer';
import templateReducter from '../template/reducer';



const rootReducer = combineReducers({
    stepreducer: stepreducer,
    templateReducter: templateReducter,
});

export default rootReducer;