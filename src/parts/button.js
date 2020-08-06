import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyButton extends Component{ 
    render(){
        return(
          <button className="btn btn-outline-dark">{this.props.e}</button>
        );
    }
}


export default MyButton;