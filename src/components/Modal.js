import React, { Component } from 'react';
import classNames from 'classnames';

import './Modal.css';

export default class Modal extends Component {
  state = {
    show: false,
  };
  constructor(args) {
    super(args);
  }

  componentWillReceiveProps(props) {
    if (props.show) {
      this.show();
    }
  }

  show = () => {
    this.setState(
      {
        show: true,
      },
      () =>
        setTimeout(() => {
          this.modalRef.className += ' modal-show';
        }),
    );
  };

  hide = () => {
    this.modalRef.className = 'modal';
    setTimeout(() => {
      this.setState({
        show: false,
      });
    }, 150);
  };

  render() {
    if (!this.state.show) return null;
    return (
      <div className="modal" ref={r => (this.modalRef = r)}>
        <div className="modal-container" onClick={this.hide}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            {this.props.children}
          </div>
        </div>
        <div className="modal-background" />
      </div>
    );
  }
}
