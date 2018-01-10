import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.css';

import Modal from '../../components/Modal.js';
import LoadingSpinner from '../../components/LoadingSpinner.js';
import NewsItem from './components/NewsItem.js';
import NewsDetail from './components/NewsDetail.js';
import Pagination from './components/Pagination.js';

class Home extends Component {
  static propTypes = {
    getNews: PropTypes.func,
    selectNews: PropTypes.func,
    loadingNews: PropTypes.bool,
    newsList: PropTypes.array,
  };

  componentWillMount() {
    this.props.getNews();
  }

  selectNewsItem = newsItem => {
    this.props.selectNews(newsItem);
    this.detailModalRef.show();
  };

  render() {
    return (
      <div>
        <LoadingSpinner show={this.props.loadingNews} />
        {this.props.newsList &&
          this.props.newsList.map((news, index) => (
            <NewsItem
              id="news-item-list"
              onClick={() => this.selectNewsItem(news)}
              key={index}
              news={news}
            />
          ))}
        {this.props.newsList && <Pagination {...this.props} />}
        <Modal ref={r => (this.detailModalRef = r)}>
          <NewsDetail news={this.props.selectedNews} />
        </Modal>
      </div>
    );
  }
}

export default Home;
