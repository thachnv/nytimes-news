import React, { Component } from 'react';
import './Home.css';

import NewsItem from './components/NewsItem.js';
import Pagination from './components/Pagination.js';

class Home extends Component {
  componentWillMount() {
    this.props.getNews();
  }
  render() {
    return (
      <div>
        {this.props.newsList &&
          this.props.newsList.map((news, index) => (
            <NewsItem key={index} news={news} />
          ))}
        <Pagination {...this.props} />
      </div>
    );
  }
}

export default Home;
