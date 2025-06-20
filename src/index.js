import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class App extends React.Component{
  state = {
    count :0
  }
  plusOne = () =>{
    this.setState({count : this.state.count +1})
  }
  minusOne = () =>{
    if(this.state.count > 0) this.setState({count : this.state.count -1})
  }
  resetToZer0 = () =>{
    this.setState({count : 0})
  }
  render() {
    const count = this.state.count
    return(
      <div className='App'>
        <h1>Increment / Decrement Counter</h1>
        <div className='count-container'>
          <div className = 'button-wrapper'>
            <button className='minus' onClick={this.minusOne}>-</button>
            <span className='count'>{count}</span>
            <button className='plus' onClick= {this.plusOne}>+</button>
          </div>
        </div>
        <button className='reset' onClick={this.resetToZer0}>Reset</button>
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

