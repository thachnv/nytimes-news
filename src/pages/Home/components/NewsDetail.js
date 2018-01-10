import React  from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const DEFAULT_SOURCE = 'The New York Times';

const NewsDetail = ({ news }) => (
  <div className="news-detail">
    <div className="source">
      <span className="source-content">{news.source || DEFAULT_SOURCE}</span>{' '}
    </div>
    <div className="public-date">
      {moment(news.pub_date).format('MM/DD/YYYY HH:MM')}
    </div>
    <div className="snippet">{news.snippet}</div>
    <div className="multimedia">
      {news.multimedia[0] && (
        <img
          alt=""
          style={{ maxWidth: '100%' }}
          src={`http://www.nytimes.com/${news.multimedia[0].url}`}
        />
      )}
    </div>
  </div>
);

NewsDetail.propTypes = {
  news: PropTypes.object,
};

export default NewsDetail;
