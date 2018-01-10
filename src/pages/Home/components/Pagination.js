import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import classNames from 'classnames';
import './Pagination.css';

const MAX_PAGE_DISPLAY = 10;

// The API only support up to page 200
const MAX_PAGE = 200;

export default class Pagination extends Component {
  static propTypes = {
    currentPage: PropsTypes.number,
    moveToPage: PropsTypes.func,
  };

  moveToPreviousPage = () => {
    if (this.props.currentPage > 0) {
      this.props.moveToPage(this.props.currentPage - 1);
    }
  };

  moveToNextPage = () => {
    if (this.props.currentPage < MAX_PAGE) {
      this.props.moveToPage(this.props.currentPage + 1);
    }
  };

  render() {
    let pages = [];
    let currentPage = this.props.currentPage || 1;

    let i = 0;
    if (currentPage > 4) {
      i = currentPage - 5;
    }

    for (let limit = i + MAX_PAGE_DISPLAY; i < limit; i++) {
      pages.push(
        <span
          className={classNames(
            'page-item',
            this.props.currentPage === i ? 'active' : null,
          )}
          onClick={(i => () => this.props.moveToPage(i))(i)}
        >
          {i + 1}
        </span>,
      );
    }

    return (
      <div className="pagination">
        <i
          onClick={this.moveToPreviousPage}
          className="fa fa-chevron-left move-left-button"
        />
        {pages}
        <i
          onClick={this.moveToNextPage}
          className="fa fa-chevron-right move-right-button"
        />
      </div>
    );
  }
}
