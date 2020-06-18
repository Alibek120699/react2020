import React, { Component } from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
  children: React.ReactNode;
};

class Modal extends Component<ModalProps> {
  el: HTMLDivElement = document.createElement('div');

  componentDidMount(): void {
    document.body.appendChild(this.el);
  }

  componentWillUnmount(): void {
    document.body.removeChild(this.el);
  }

  render(): React.ReactElement<ModalProps> {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Modal;
