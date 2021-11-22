import * as actionLabels from '../../actionLabels';

export const getAllHeroesListSaga = payload => ({
  type: actionLabels.GET_ALL_HEROES_LIST_SAGA,
  payload,
});
export const getAllHeroesListStart = () => ({
  type: actionLabels.GET_ALL_HEROES_LIST_START,
});
export const getAllHeroesListSuccess = payload => ({
  type: actionLabels.GET_ALL_HEROES_LIST_SUCCESS,
  payload,
});
export const getAllHeroesListFail = payload => ({
  type: actionLabels.GET_ALL_HEROES_LIST_FAIL,
  payload,
});

export const filterHeroList = payload => ({
  type: actionLabels.FILTER_HEROES_LIST,
  payload,
});

export const getHeroDataSaga = payload => ({
  type: actionLabels.GET_HERO_DATA_SAGA,
  payload,
});

export const getHeroDataStart = () => ({
  type: actionLabels.GET_HERO_DATA_START,
});

export const getHeroDataSuccess = payload => ({
  type: actionLabels.GET_HERO_DATA_SUCCESS,
  payload,
});

export const getHeroDataFail = payload => ({
  type: actionLabels.GET_HERO_DATA_FAIL,
  payload,
});

export const resetHeroData = payload => ({
  type: actionLabels.RESET_HERO_DATA,
  payload,
});
