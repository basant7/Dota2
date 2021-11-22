import { put, call } from 'redux-saga/effects';
import { loginSuccess, loginFail, loginStart } from '../../actions';
import axiosMain from '../../../http/axios/axios_main';

export function* loginSaga() {
  yield put(loginStart());
  try {
    const response = yield axiosMain.get('/api');
    if (response.status === 200) {
      yield loginSuccess(response.data);
      yield call([localStorage, 'setItem'], 'authToken', response.data.token);
    } else {
      yield put(loginFail('Something went wrong! Please try again.'));
    }
  } catch (error) {
    if (
      error !== undefined &&
      error.response !== undefined &&
      error.response.status !== undefined
    ) {
      if (error.response.status === 400) {
        yield put(loginFail(error.response.data.msg));
      } else if (
        error.response.data.msg !== undefined &&
        error.response.data.msg !== '' &&
        typeof error.response.data.msg === 'string'
      ) {
        yield put(loginFail(error.response.data.msg));
      } else {
        yield put(loginFail('Server error! Please try again.'));
      }
    } else {
      yield put(loginFail('Something went wrong! Please try again.'));
    }
  }
}

export function* authenticationValidatorSaga() {
  yield put(loginStart());
  const token = yield localStorage.getItem('authToken');
  if (!token) {
    // yield put(logout()); // logout action
  } else {
    yield put(loginSuccess({ token }));
  }
}
