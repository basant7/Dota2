import * as actionLabels from '../../actionLabels';

export const getLatestNewsFail = payload => ({
  type: actionLabels.GET_LATEST_NEWS_FAIL,
  payload,
});

export const getLatestNewsStart = () => ({
  type: actionLabels.GET_LATEST_NEWS_START,
});
export const getLatestNewsSaga = () => ({
  type: actionLabels.GET_LATEST_NEWS_SAGA,
});
export const getLatestNewsSuccess = payload => ({
  type: actionLabels.GET_LATEST_NEWS_SUCCESS,
  payload,
});
