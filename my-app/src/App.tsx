import './App.scss';
import { NumbersContainer } from 'components/NumbersContainer';
import { ControlButtons } from 'components/ControlButtons';
import { controlValue, ourCode } from 'utils/info';
import React from 'react';

class App extends React.Component {



  render() {
    return (
      <>
        <div className="wrapper">
          <div className="main-container">
            <NumbersContainer/>
            <div className='control-container'>
              {/* <button className='controlButton controlButton-black' value={ourCode}>{ourCode}</button> */}
              {controlValue.map((item) => {
                return (
                  <ControlButtons value={item} key={item}/>
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
