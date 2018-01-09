import { connect } from 'react-redux';
import Home from './Home.js';
import { getNews } from './actions.js';

const mapStateToProps = state => {
  return {
    newsList: state.home.newsList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNews: () => dispatch(getNews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
