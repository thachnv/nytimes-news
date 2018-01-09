import React, { Component } from 'react';
import './Home.css';

import Modal from '../../components/Modal.js';
import NewsItem from './components/NewsItem.js';
import NewsDetail from './components/NewsDetail.js';
import Pagination from './components/Pagination.js';

class Home extends Component {
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
        {this.props.newsList &&
          this.props.newsList.map((news, index) => (
            <NewsItem
              onClick={() => this.selectNewsItem(news)}
              key={index}
              news={news}
            />
          ))}
        <Pagination {...this.props} />
        <Modal ref={r => (this.detailModalRef = r)}>
          <NewsDetail news={this.props.selectedNews} />
        </Modal>
      </div>
    );
  }
}

export default Home;
