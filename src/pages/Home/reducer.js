import Immutable from 'seamless-immutable';

const INIT_STATE = Immutable({
  newsList: null,
  currentPage: 0,
  selectedNews: null,
});

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return state.set('newsList', action.data);
    case 'UPDATE_CURRENT_PAGE':
      return state.set('currentPage', action.data);
    case 'SELECT_NEWS':
      return state.set('selectedNews', action.data);
    default:
      return state;
  }
};
export default reducer;
