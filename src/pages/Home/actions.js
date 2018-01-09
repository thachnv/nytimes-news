export const getNews = page => async dispatch => {
  const data = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=5763846de30d489aa867f0711e2b031c&q=singapore&page=${page ||
      0}`,
  );
  const jsonData = await data.json();
  dispatch({
    type: 'GET_NEWS',
    data: jsonData.response.docs,
  });
};

export const moveToPage = page => dispatch => {
  dispatch({
    type: 'UPDATE_CURRENT_PAGE',
    data: page,
  });
  return dispatch(getNews(page));
};
