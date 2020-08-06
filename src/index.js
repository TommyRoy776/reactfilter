import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Test from './test'
import Progress from './parts/progress'
import Filter from "./parts/filter"

const printMessage=()=>{
  document.getElementById('show-area').innerHTML="我被按到了";
}


var name="old name";

ReactDOM.render(
  <React.StrictMode>

  {/*<Test> 在index.js中設定文字</Test>*/} 
   <div id="show-area"></div>
{ /*<App /> */}
  {/* <Progress/>*/ }
  <Filter/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
