import Immutable from 'seamless-immutable';

const INIT_STATE = Immutable({
  newsList: null,
  currentPage: 0,
  selectedNews: null,
  loadingNews: false,
});

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'BEGIN_GET_NEWS':
      return state.set('loadingNews', true);
    case 'GET_NEWS_SUCCESS':
      return state.merge({ newsList: action.data, loadingNews: false });
    case 'GET_NEWS_FAIL':
      return state.set('loadingNews', false);
    case 'UPDATE_CURRENT_PAGE':
      return state.set('currentPage', action.data);
    case 'SELECT_NEWS':
      return state.set('selectedNews', action.data);
    default:
      return state;
  }
};
export default reducer;
