import {
    LOGIN,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
  } from '../../../actions/index';
  
  import {call, takeEvery, put} from 'redux-saga/effects';
  import {loginApi} from '../../api/Login/login.api';
  
  const error = 'Không có dữ liệu';
  
  function* loginSaga(action) {
    try {
      const response = yield loginApi(action.input);
  
      if (response === undefined) {
        yield put({type: LOGIN_ERROR, error});
      } 
    } catch (error) {
      const err = 'Không kết nối được với máy chủ';
      yield put({type: LOGIN_ERROR, err});
    }
  }
  export function* watchLoginSaga() {
    yield takeEvery(LOGIN, loginSaga);
  }
  