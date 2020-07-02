import { all, fork, takeLatest, delay, put, getContext } from 'redux-saga/effects';

function* login(action) {
  try {
    yield delay(1000);
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: 'LOG_IN_FAILURE',
    });
  }
}

function* watchLogin() {
  yield takeLatest('LOG_IN_REQUEST', login);
}

function* logout(action) {
  try {
    yield delay(1000);
    yield put({
      type: 'LOG_OUT_SUCCESS',
      data: action.data,
    });

    const history = yield getContext('history');
    history.push('/');
  } catch (err) {
    yield put({
      type: 'LOG_OUT_FAILURE',
    });
  }
}

function* watchLogout() {
  yield takeLatest('LOG_OUT_REQUEST', logout);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout)]);
}
