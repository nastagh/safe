import React, {Component} from 'react';
import '../styles/controlButtons.scss';

interface ControlProps {
  value: string;
}


export class ControlButtons extends Component<ControlProps> {

  render() {
    if(parseInt(this.props.value)) {
      return (
        <button className='controlButton controlButton-black'>
          {this.props.value}
        </button>
      );
    } else {
      return (
        <button className='controlButton controlButton-green'>
          {this.props.value}
        </button>
      );
    }
  }
}