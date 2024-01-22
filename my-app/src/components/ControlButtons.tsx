import React, { Component } from 'react';
import '../styles/controlButtons.scss';

interface ControlProps {
  value: string;
  onClick: (value: string) => void;
}


export class ControlButtons extends Component<ControlProps> {

  handleClick = (value: string) => {
    this.props.onClick(value);
  }

  render() {
      return (
        <button
          className='controlButton controlButton-green'
          onClick={() => this.handleClick(this.props.value)}>
          {this.props.value}
        </button>
      );
  }
}