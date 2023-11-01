import React, { Component } from 'react';
import { ErrorButtonState } from '../../types/interfaces';

class ErrorButton extends Component<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  ErrorButtonState
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      throwError: false,
    };
  }

  handleClick = () => {
    this.setState({ throwError: true });
  };

  render() {
    if (this.state.throwError) {
      throw new Error('This is a simulated error');
    }

    return (
      <>
        <button className="error-btn" onClick={this.handleClick}>
          Throw Error
        </button>
      </>
    );
  }
}

export default ErrorButton;
