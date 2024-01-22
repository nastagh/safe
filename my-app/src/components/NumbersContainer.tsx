import React from 'react';
import { NumberItem } from './NumberItem';
import "../styles/numbersContainer.scss";
import { numbersArray } from '../utils/info';


export class NumbersContainer extends React.Component {

  state: { count: number[] } = {
    count: []
  }

  handleClick = (value: number) => {
    if (this.state.count.length < 3) {
      this.setState({
        count: [...this.state.count, value]
      })
    } else {
      this.setState({ count: [] })
    }
  }

  render(): React.ReactNode {
    return (
      <div className='numbers-container'>
        {numbersArray.map((item) => {
          return (
            <NumberItem value={item} key={item} onClick={this.handleClick} />
          )
        })}
      </div >
    )
  }
}