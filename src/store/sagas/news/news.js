/* eslint-disable import/prefer-default-export */
import { put } from 'redux-saga/effects';
import { errorHandler } from '../../../utils';
import { getLatestNewsFail, getLatestNewsStart, getLatestNewsSuccess } from '../../actions';

export function* getLatestNewsSaga() {
  yield put(getLatestNewsStart());
  yield errorHandler({
    endpoint: '/news',
    successHandler: yield function* (response) {
      yield put(getLatestNewsSuccess(response));
    },
    failHandler: getLatestNewsFail,
    apiType: 'get',
  });
}
