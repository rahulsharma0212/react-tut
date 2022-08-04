import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const style = {
      color: "green",
    };
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <span style={style}>by Rahul</span>
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi I\'m a React App ',React.createElement('span',{style:{color:"green"}},'by Rahul Sharma')));
  }
}

export default App;
