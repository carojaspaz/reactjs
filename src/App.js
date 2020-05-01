import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//function Hello(props){
//  return <h1>{props.title}</h1>
//}

//const Hello = (props) => <h2>{props.title}</h2>;

class Hello extends Component {
  render() {
    return <h3>{this.props.title}</h3>;
  }
}

class Text extends Component {
  render() {
    const { 
      boolean, 
      arrayOfNumber, 
      arrayOfObject, 
      text, 
      number, 
      multiply,
      title
    } = this.props;

    const boolToText = boolean ? "Verdadero" : "Falso";
    const mapNumber = arrayOfNumber.map(multiply);
    return (
      <div>
        {title}
        <p>{text}</p>
        <p>{number}</p>
        <p>{boolToText}</p>
        <p>{mapNumber.join(', ')}</p>
        <p>{arrayOfObject.key1}</p>
      </div>
    )
  }
}

Text.defaultProps = {
  text: "Texto por defecto"
}

class Counter extends Component{
  constructor (props){
    super(props)
    this.state = { counter: this.props.initCount }
    setInterval(()=>{
      this.setState({counter: this.state.counter + 1});
    },1000);
  }
  render(){
    return <CounterNumber number={this.state.counter} />
  }
}

Counter.defaultProps = {
  initCount: 10
}

class CounterNumber extends Component{
  render(){
    return <span>Count: {this.props.number}</span>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter initCount={2}/>
        <Text
        text="Otro valor"
        title={<h1>Titulo componente</h1>}
        number="2" 
        boolean 
        arrayOfNumber={[2, 1, 30]} 
        arrayOfObject={{key1:"Objeto 1", key2:"Objeto 2"}} 
        multiply={(number) => number * 3}/>
      </header>
    </div>
  );
}

export default App;
