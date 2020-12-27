import {combineReducers} from 'redux';
import loginReducers from './Login/loginReducers';
const rootReducer = combineReducers({
  loginReducers,
});
export default rootReducer;
