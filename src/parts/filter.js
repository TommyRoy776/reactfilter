import React, { Component } from 'react';
import testData from './testData'
import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../myApp.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  passingTags: { //change to a function turns everything false
    headlessMode:{true:false,false:false},
    brushlessMotor:{true:false,false:false},
    foldable:{true:false,false:false},
    speed:{100:false,200:false,300:false,400:false}
   },
   tableData:testData,
}

class Filter extends Component{
    constructor(){
        super()
        this.state ={
            passingTags: {
             headlessMode:{true:false,false:false},
             brushlessMotor:{true:false,false:false},
             foldable:{true:false,false:false},
             speed:{100:false,200:false,300:false,400:false}
            },
            tableData:testData,
            collected: null
        }
        this.renderItems = this.renderItems.bind(this)
        this.showState = this.showState.bind(this)
        this.multiPropsFilter = this.multiPropsFilter.bind(this)
        this.filteredCollected = this.filteredCollected.bind(this)
        this.reset = this.reset.bind(this)
        this.selectButton = this.selectButton.bind(this)
        this.generateButton = this.generateButton.bind(this)
        this.changeTags = this.changeTags.bind(this)

    }

    filteredCollected = () => {
        const collectedTrueKeys = {
            headlessMode:[],
            brushlessMotor:[],
            foldable:[],
            speed:[]
        }
        const { headlessMode, brushlessMotor, foldable,speed} = this.state.passingTags;
        for(let key in headlessMode){
            if(headlessMode[key]){
                collectedTrueKeys.headlessMode.push(key)
            }
        }

        for(let key in brushlessMotor){
            if(brushlessMotor[key]){
                collectedTrueKeys.brushlessMotor.push(key)
            }
        }
        for(let key in foldable){
            if(foldable[key]){
                collectedTrueKeys.foldable.push(key)
            }
        } 

        for(let key in speed){
          if(speed[key]){
              collectedTrueKeys.speed.push(key)
          }
      }
        //console.log(collectedTrueKeys)
        this.setState({collected:collectedTrueKeys})
        return collectedTrueKeys;

    }

    allFilterClickListener = (e, filterProp) => {
        console.log("FILTER clicked", e.target.dataset.name);
        const name = e.target.dataset.name;
        this.setState(prevState => ({
          passingTags: {
            ...prevState.passingTags,
            [filterProp]: {
              ...prevState.passingTags[filterProp],
              [name]: !prevState.passingTags[filterProp][name]
            }
          }
       
        }));
        if(e.target.classList.contains("Selected")){
          e.target.classList.remove("Selected")
        }else{ 
           e.target.classList.add("Selected")
          }   
        this.changeTable()  
      };
      
      renderItems(item,i){
     return(
            <tr key={i}>
              <td>{item.text}</td>
              <td>{item.headlessMode.toString()}</td>
              <td>{item.brushlessMotor.toString()}</td>
              <td>{item.foldable.toString()}</td>
            </tr>
          )
        }

   multiPropsFilter = (products) => {
    const filters = this.filteredCollected();
   // const filters = this.state.collected
    console.log(filters);
    const filterKeys = Object.keys(filters); //keys of passingTags
    console.log(filterKeys.toString())
    return products.filter(product => { //return array of products that passed the function
      return filterKeys.every(key => {
        if (!filters[key].length) return true; //while array is empty
        // Loops again if product[key] is an array (for material attribute).
        if (Array.isArray(product[key])) {  
          return product[key].some(keyEle => filters[key].includes(keyEle)); //if this product property is array
        }
        return filters[key].includes(product[key].toString()); //normal situation
      });
    });
  };

  searchProducts = () => {
    const filteredProducts = this.multiPropsFilter(testData);
    return filteredProducts.filter(product => {
      return product.name
        .toLowerCase()
        .includes(this.state.passingTags.search.inputTerm);
    });
  };

  changeTable = () =>{
    this.setState({tableData:this.multiPropsFilter(testData)},  
    () => {console.log(this.state.tableData); this.generateButton()});
  }

  changeTags = () =>{
    var stateCopy = Object.assign({}, this.state.passingTags);
    for(var a in stateCopy){
      //console.log(stateCopy[a])
      for(var x in stateCopy[a]){
        stateCopy[a][x] = false
        console.log(stateCopy[a][x])
      }
    }
    return stateCopy
  }
   
  reset() {
    this.setState(({
      passingTags: this.changeTags()
    }),()=>{
     /* var x = document.querySelectorAll(".Selected")
      console.log( x)
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("Selected")
      }*/
      this.changeTable()
    })
  }

  generateButton = () =>{
    const data = this.selectButton();
    const chosen =  this.filteredCollected()
    for(var x in data){
      document.getElementById("group-"+x).innerHTML =""
    }
    for(var x in data){
       for(var e of data[x]){
        const text = e
        const container = x
        const btn = document.createElement("BUTTON");
        btn.classList.add("btn","btn-outline-dark");
        btn.innerHTML = text;
        btn.dataset.name = e
        btn.onclick = e =>this.allFilterClickListener(e,container)
        document.getElementById("group-"+x).appendChild(btn);
       //console.log(chosen[x])
        if(chosen[x].includes(e.toString())){
          //console.log("work")
          btn.classList.add("Selected")
        }
      }
    }

  }

  selectButton = () =>{
    const collectedOptions = {
      headlessMode:[],
      brushlessMotor:[],
      foldable:[],
      speed:[]
   }
    
    for(var product of this.state.tableData){
       for( var x in product){
         if(collectedOptions.hasOwnProperty(x)){
            if(!collectedOptions[x].includes(product[x])){
              collectedOptions[x].push(product[x])
            }
         }
         
        //console.log(x)
       }
    }
    for(var x in collectedOptions){
      console.log(collectedOptions[x][0])
      if(typeof collectedOptions[x][0] === 'boolean'){
        collectedOptions[x].sort(function(x, y) {
          // true values first
          return (x === y)? 0 : x? -1 : 1;
          // false values first
          // return (x === y)? 0 : x? 1 : -1;
         });
      }
      if(typeof collectedOptions[x][0] === 'number'){
        collectedOptions[x].sort((a,b)=>a-b)
      }  
    }
    console.log(collectedOptions)
    return collectedOptions
  }

    showState = () =>{
        console.log("HT "+this.state.passingTags.headlessMode.true)
        console.log("HF "+this.state.passingTags.headlessMode.false)
        console.log(this.filteredCollected())
        console.log(this.multiPropsFilter(testData))
    }



    componentDidMount(){
      this.generateButton()
    }

    render(){  
        return(
            <div>
              <section id="intro">
                 <h1>Drone Filter</h1>
                 <p id="description">A filter for drone customer</p> 
              </section>
              <section id="buttons">
                <h3>Search</h3>
                <label for="fname">headlessMode</label>
                <div class="btn-group right" id="btn-group0" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-outline-dark" onClick={() => this.reset()}>reset</button>
                    <button type="button" class="btn btn-outline-dark">Advanced Mode</button>
                </div> 
                <div class="btn-group" id="group-headlessMode" role="group" aria-label="Basic example">
                {/*  <button type="button" class="btn btn-outline-dark" onClick={e =>this.allFilterClickListener(e,"headlessMode") } data-name="true" >True</button> */}
                  {/*<button  type="button" class="btn btn-outline-dark" onClick={e =>this.allFilterClickListener(e,"headlessMode") } data-name="false" >False</button> */}
                </div> 
                            
                <label for="fname">brushlessMotor</label>
                <div class="btn-group" id="group-brushlessMotor"  role="group" aria-label="Basic example">
                {/* <button  type="button" class="btn btn-outline-dark" onClick={e =>this.allFilterClickListener(e,"brushlessMotor")} data-name="true">True</button>  
                  <button type="button" class="btn btn-outline-dark" onClick={e =>this.allFilterClickListener(e,"brushlessMotor")} data-name="false">False</button> */}
                </div>                   
                <label for="fname">foldable</label>
                <div class="btn-group" id="group-foldable" role="group" aria-label="Basic example">
                  {/*<button type="button" class="btn btn-outline-dark" onClick={e =>this.allFilterClickListener(e,"foldable")} data-name="true"> True</button> 
                  <button type="button" class="btn btn-outline-dark" onClick={e =>this.allFilterClickListener(e,"foldable")} data-name="false">False</button> */}
                 </div>
                 <label for="fname">Speed</label>
                 <div class="btn-group" id="group-speed" role="group" aria-label="Basic example">
                  {/*<button type="button" class="btn btn-outline-dark" onClick={e =>this.allFilterClickListener(e,"speed")} data-name="100"> 100</button> 
                  <button type="button" class="btn btn-outline-dark" onClick={e =>this.allFilterClickListener(e,"speed")} data-name="200">200</button> 
                  <button type="button" class="btn btn-outline-dark" onClick={e =>this.allFilterClickListener(e,"speed")} data-name="300"> 300</button> 
                <button type="button" class="btn btn-outline-dark" onClick={e =>this.allFilterClickListener(e,"speed")} data-name="400">400</button> */}
                 </div>
                 <br/>
              {/* <button  onClick={this.filteredCollected}>submit</button> <button onClick={this.showState}>ShowState</button> */}
                {/*<button type="button" class="btn btn-outline-dark" onClick={this.changeTable}>result</button>*/}
               <label>......</label>
              </section>  
              <section id="table">
                <ReactBootStrap.Table striped bordered hover size="sm" id="TableContent">
                <thead>
                <tr>
                   <th>Text</th>
                   <th>headlessMode</th>
                  <th>brushlessMotor</th>
                  <th>foldable</th>
                </tr>
               </thead>
               <tbody>
                  {this.state.tableData.map(this.renderItems)}
               </tbody>
                </ReactBootStrap.Table>
             </section>
            </div>
        )
    }
}

export default Filter;

/*
  <button onClick={() => this.setState({passingTags:{headlessMode:{true:true}}})}>True</button> 
                 <button  onClick={() => this.setState({passingTags:{headlessMode:{true:false}}})} >False</button> 
*/ 