import {
    LOGIN_SUCCESS,
    LOGIN_ERROR
  } from '../../actions/index';
  
  const initialState = [];
  
  const loginReducers = (login = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return JSON.parse(action.response);
      case LOGIN_ERROR:
        return action.response;
      default:
        return login;
    }
  };
  
  export default loginReducers;
  