import React, { Component } from 'react';
import { NumberItem } from './NumberItem';
import "../styles/numbersContainer.scss";
import { numbersArray } from '../utils/info';

interface NumbersContainerProps {
 selectedValues: number[];
  onClick: (value: number) => void;
}

export class NumbersContainer extends Component<NumbersContainerProps> {

  // handleClick = (value: number) => {
  //   this.props.onClick(value);
  // }

  render(): React.ReactNode {
    return (
      <div className='numbers-container'>
        {numbersArray.map((item) => {
          return (
            <NumberItem
              value={item}
              key={item}
              onClick={this.props.onClick}
              clicked={this.props.selectedValues.includes(item)} />
          )
        })}
      </div >
    )
  }
}