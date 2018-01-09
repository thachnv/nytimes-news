import React, { Component } from 'react';
import './Home.css';

import NewsItem from './components/NewsItem.js';

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
      </div>
    );
  }
}

export default Home;
