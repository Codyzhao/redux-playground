import { combineReducers } from 'redux';
import counter from '../component/counter/counter.duck';

const rootReducer = combineReducers({counter});
export default rootReducer;
