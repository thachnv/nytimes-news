import { connect } from 'react-redux';
import Home from './Home.js';
import { getNews, moveToNextPage, moveToPreviousPage, moveToPage } from './actions.js';

const mapStateToProps = state => {
  return {
    newsList: state.home.newsList,
    currentPage: state.home.currentPage,
  };
};

const mapDispatchToProps = {
  getNews,
  moveToNextPage,
  moveToPreviousPage,
  moveToPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
