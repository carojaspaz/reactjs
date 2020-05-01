import React, { Component } from 'react';
import ConditionalSection from './sections/conditional.component';
import './App.css';

class App extends Component{
  render() {
    const numbers = [1,2,3,4,5];
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ConditionalSection />
          {numbers.map(n => {
            return <p>Soy el número {n} </p>
          })}
        </div>
      </header>
    </div>
  )};
}

export default App;
