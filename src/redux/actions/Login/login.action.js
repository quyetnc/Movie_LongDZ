import {LOGIN} from '../index'
export const loginAction = (input) => {
    return {
      type: LOGIN,
      input: input,
    };
  };
  