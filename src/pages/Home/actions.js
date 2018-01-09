export const getNews = () => async dispatch => {
  const data = await fetch(
    'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=5763846de30d489aa867f0711e2b031c&q=singapore&page=200',
  );

  const jsonData = await data.json();

  dispatch({
    type: 'GET_NEWS',
    data: jsonData.response.docs,
  });
  // .then(data => data.json())
  // .then(response => console.log(response));
  // return {
  //   type: 'GET_NEWS',
  // }
};
