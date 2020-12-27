import {all} from 'redux-saga/effects';

import {watchLoginSaga} from './Login/login.saga';

export default function* rootSaga() {
  yield all([
    watchLoginSaga(),
  ]);
}
