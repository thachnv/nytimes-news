import { connect } from 'react-redux';
import Home from './Home.js';
import { getNews, moveToPage, selectNews } from './actions.js';

const mapStateToProps = state => {
  return {
    ...state.home,
  };
};

const mapDispatchToProps = {
  getNews,
  moveToPage,
  selectNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
