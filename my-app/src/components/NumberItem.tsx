import React, { Component } from 'react';
import '../styles/numberItem.scss';

interface NumberProps {
  value: number;
  onClick: (value: number) => void;
}


export class NumberItem extends Component<NumberProps> {

  state: { checked: boolean } = {
    checked: false,
    // count: []
  }

  handleClick = (value: number) => {
    // if (this.state.count.length < 3) {
    //   this.setState({
    //     count: [...this.state.count, value]
    //   });

      if (!this.state.checked) {
        this.setState({ checked: true })
      } else {
        this.setState({ checked: false })
      } 
    this.props.onClick(value);
      // console.log(this.state)
    // } else {
    //   this.setState({ count: [] })
    //   this.setState({ checked: false })
    //   // console.log(this.state)
    // }
  }

  render() {
    return (
      <button
        className={`numberButton ${(!this.state.checked) ? 'unChecked' : 'checked'}`}
        onClick={() => this.handleClick(this.props.value)}>
        {this.props.value}
      </button>
    );
  }
}