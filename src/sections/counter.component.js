import React, { Component } from 'react';

class CounterNumber extends Component{
    render(){
      return <span>Count: {this.props.number}</span>
    }
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