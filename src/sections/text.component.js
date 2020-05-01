import React, { Component } from 'react';

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