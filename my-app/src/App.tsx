import './App.scss';
import { NumbersContainer } from 'components/NumbersContainer';
import { ControlButtons } from 'components/ControlButtons';
import { controlValue, ourCode } from 'utils/info';
import React from 'react';

class App extends React.Component {

  state: { selectedValues: number[], isValid: boolean, message: string } = {
    selectedValues: [],
    isValid: false,
    message: ''
  }

  handleClick = (value: string) => {
    switch (value) {
      case 'Clear':
        this.setState({ selectedValues: [], isValid: false, message: '' })
        break;
      case 'Check':
        if (parseInt(this.state.selectedValues.join('')) === ourCode ) {
          this.setState({ isValid: true })
          this.setState({ message: 'Correct' })
        } else {
          this.setState({ message: 'Incorrect' })
        }
        break;
      default:
    }
  }

  addSelectedValue = (value: number) => {
    if (this.state.selectedValues.length < 3) {
      this.setState({
        selectedValues: [...this.state.selectedValues, value]
      })
    } else {
      this.setState({ selectedValues: [], message: '' })
    }
  }


  render() {
    return (
      <>
        <div className="wrapper">
          <div className={`message ${(this.state.message) ? 'visible' : 'invisible'}`}>
            {this.state.message}
          </div>
          <div className="main-container">
            <NumbersContainer
              selectedValues={this.state.selectedValues}
              onClick={this.addSelectedValue}
            />
            <div className='control-container'>
              <button className='controlButton controlButton-black'>{this.state.selectedValues.join('')}</button>
              {controlValue.map((item) => {
                return (
                  <ControlButtons value={item} key={item} onClick={this.handleClick} />
                )
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
