import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
  state = {
    show: false,
  };

  show = () => {
    this.setState(
      {
        show: true,
      },
      () =>
        setTimeout(() => {
          this.modalRef.className += ' modal-show';
          document.body.style.overflow = 'hidden';
          document.body.style.paddingRight = '15px';
        }),
    );
  };

  hide = () => {
    this.modalRef.className = 'modal';
    setTimeout(() => {
      this.setState({
        show: false,
      });
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = 0;
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
