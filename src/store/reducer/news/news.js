import * as actionLabels from '../../actionLabels';

export const initialState = {
  isLoading: false,
  newsList: null,
  errorMsg: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.GET_LATEST_NEWS_START:
      return {
        ...state,
        isLoading: true,
        errorMsg: null,
      };
    case actionLabels.GET_LATEST_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        newsList: payload,
      };
    case actionLabels.GET_LATEST_NEWS_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMsg: payload,
      };
    default:
      return state;
  }
};
