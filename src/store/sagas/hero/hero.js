/* eslint-disable import/prefer-default-export */
import { put } from 'redux-saga/effects';
import { errorHandler } from '../../../utils';
import {
  getAllHeroesListFail,
  getAllHeroesListStart,
  getAllHeroesListSuccess,
  getHeroDataFail,
  getHeroDataStart,
  getHeroDataSuccess,
} from '../../actions';

export function* getAllHeroesListSaga() {
  yield put(getAllHeroesListStart());
  yield errorHandler({
    endpoint: '/constants/heroes',
    successHandler: yield function* (response) {
      yield put(getAllHeroesListSuccess(response));
    },
    failHandler: getAllHeroesListFail,
    apiType: 'get',
  });
}

export function* getHeroDataSaga(action) {
  yield put(getHeroDataStart());
  const { heroName } = action.payload;
  yield errorHandler({
    endpoint: '/constants/hero_names',
    successHandler: yield function* (response) {
      yield put(getHeroDataSuccess({ data: response, heroName }));
    },
    failHandler: getHeroDataFail,
    apiType: 'get',
  });
}
