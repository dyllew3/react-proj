import React from "react";
import ReactDOM from "react-dom";
import { Example } from "./example";

const Index = () => {
  return <div>Hello React!</div>;
};
let x = <div>Hello React!</div>;
let y = false;
function bloop(y){
  if(y){
    <div>true</div>
  }
  else {
    <div>false</div>
  }
}

ReactDOM.render(<Example name={"Lizard Man"} />, document.getElementById("index"));
