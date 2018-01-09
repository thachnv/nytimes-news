import React, { Component } from 'react';
import moment from 'moment';

const DEFAULT_SOURCE = 'The New York Times';

const NewsDetail = ({ news }) => (
  <div className="news-item">
    <div className="source">
      <span className="source-content">{news.source || DEFAULT_SOURCE}</span>{' '}
    </div>
    <div className="public-date">
      {moment(news.pub_date).format('MM/DD/YYYY HH:MM')}
    </div>

    <div className="snippet">{news.snippet}</div>
  </div>
);

export default NewsDetail;
