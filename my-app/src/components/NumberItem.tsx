import React, { Component } from 'react';
import '../styles/numberItem.scss';

interface NumberProps {
  value: number;
  onClick: (value: number) => void;
  clicked: boolean;
}


export class NumberItem extends Component<NumberProps> {

  // handleClick = (value: number) => {
  //   this.props.onClick(value);
  // }

  render() {
    return (
      <button
        className={`numberButton ${(!this.props.clicked) ? 'unChecked' : 'checked'}`}
        onClick={ () => this.props.onClick(this.props.value)}>
        {this.props.value}
      </button>
    );
  }
}