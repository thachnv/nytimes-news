import React, { Component } from 'react';

class Home extends Component {
  componentWillMount() {
    this.props.getNews();
  }
  render() {
    return (
      <div>
        {this.props.newsList &&
          this.props.newsList.map((news, index) => (
            <div key={index}>{news.snippet}</div>
          ))}
      </div>
    );
  }
}

export default Home;
