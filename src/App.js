import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContent from './MainContent';
import Footer from './Footer';
import Header from './Header';
import './myApp.css';
import Card from './parts/card';
import setData from './parts/dataSet';
import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  var num = 0;
  function clickHandle(){
    num = 6; 
  }
   const output = setData.map(data => {
      if(data.id>1){
       return <Card key={data.id} id={data.id} text={data.text}/>
      }
    })
  return (
    <div>
      <Header/>
      <input type ="number" id="num" name="num"></input>
      <ReactBootStrap.Button variant="outline-primary">Primary</ReactBootStrap.Button>
      {output}
      <MainContent/>
      <Footer/>
    </div>
  );
}

/*const renderItems = (item,i) => {
  return(
    <tr key={i}>
      <td>{item.id}</td>
      <td>{item.text}</td>
    </tr>
  )
}*/

class AppC extends Component{
  constructor(){
    super()
    this.state = {
      name:"ABC",
      age: null,
      data: null,
      value: 0,
      isBrushless: 2
    }
    this.renderItems = this.renderItems.bind(this)
    this.changeTable = this.changeTable.bind(this)
    this.handleChange = this.handleChange.bind(this)
 
  }

renderItems(item,i){
  if(item.power>this.state.value){return(
      <tr key={i}>
        <td>{item.id}</td>
        <td>{item.text}</td>
        <td>{item.power}</td>
        <td>{item.motor.toString()}</td>
      </tr>
    )}
  }

  changeTable = e => {
    e.preventDefault();
    this.setState({ value: this.textInput.value})
    console.log(this.state.value)
  };

  changeMotor = e =>{
    e.preventDefault();
    if(this.state.isBrushless === 0 || this.state.isBrushless === 1){
      this.setState({ isBrushless: 2})
    }else{
    this.setState({ isBrushless: parseInt(e.target.value)})
    }
    console.log(this.state.isBrushless)
  
  }

  handleChange(e){
    this.setState({value:e.target.value})
  }

  
 
  render(){
    return(
      <div>
        { /*<h1>{this.state.name}</h1> */}
       {/* <h3>{this.state.age} years old</h3>
        <button onClick={()=>{this.setState(prevState =>{
          return{age:prevState.age+1}
          }
         )
        }}>
          Click
      </button> */}
     <center><h1>Drone Filter</h1></center> 
       <label for="fname">power</label>
        <input type="number" /*onChange={ this.handleChange }*/ ref={e => this.textInput = e} ></input>
        <button onClick={this.changeTable}>Table</button><br/>
        <label for="fname">Brushless motor</label>
       {this.state.isBrushless === 1 ? null :  <MyButton text="Yes"  handleClick={this.changeMotor} value={0}/>  }
       {this.state.isBrushless === 0 ? null : <MyButton text="No"  handleClick={this.changeMotor} value={1}/>}
     
 <ReactBootStrap.Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Text</th>
      <th>power</th>
      <th>Motor</th>
    </tr>
  </thead>
  <tbody>
    {setData.map(this.renderItems)}
  </tbody>
    </ReactBootStrap.Table>   
</div>
    )
  }
} 

class MyButton extends Component{
  render(){
    return(
  <ReactBootStrap.Button variant="outline-primary" value={this.props.value} onClick={this.props.handleClick}>
    {this.props.text}
  </ReactBootStrap.Button>
    )
  }
} 

export default AppC;
  /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/

  