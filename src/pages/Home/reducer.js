import Immutable from 'seamless-immutable';

const INIT_STATE = Immutable({
  newsList: null,
});

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return state.set('newsList', action.data);
    default:
      return state;
  }
};
export default reducer;
