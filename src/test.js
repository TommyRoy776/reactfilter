import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./parts/card"

class Test extends Component{
    constructor(props) { 
        super(props);
        this.name="舊的名字"; // 加入name
        this.changeName=this.changeName.bind(this); //綁定至自己
      }
      changeName=(newName)=>{ 
        this.name=newName;
        console.log("hey"+this.name)//加入此行
      }
      
    render(){
        return( //props
            <React.Fragment>
                <Card id={16} text={"Fuck"}/> 
                <button onClick={() => this.changeName("newShit")}>{this.name}</button>
            </React.Fragment>
        )
    }
}

export default Test;