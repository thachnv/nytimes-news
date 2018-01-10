export const getNews = page => async dispatch => {
  dispatch({
    type: 'BEGIN_GET_NEWS',
  });
  try {
    const data = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=5763846de30d489aa867f0711e2b031c&q=singapore&page=${page ||
        0}`,
    );
    const jsonData = await data.json();
    dispatch({
      type: 'GET_NEWS_SUCCESS',
      data: jsonData.response.docs,
    });
  } catch (e) {
    dispatch({
      type: 'GET_NEWS_FAIL',
      data: e,
    });
  }
};

export const moveToPage = page => dispatch => {
  dispatch({
    type: 'UPDATE_CURRENT_PAGE',
    data: page,
  });
  return dispatch(getNews(page));
};

export const selectNews = news => dispatch => {
  dispatch({
    type: 'SELECT_NEWS',
    data: news,
  });
};
