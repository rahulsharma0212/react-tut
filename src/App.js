// import React, { Component } from "react";
import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
const App = (props) => {
  const [person, setPerson] = useState({
    person: [
      { name: "stephanie", age: 26 },
      { name: "Manu", age: 29 },
      { name: "Max", age: 28 },
    ],
  });
  // const [otherState,setotherState] = useState({ otherState: "Some other value" });
  // console.log(person,otherState);
  const switchNameHandler = (name) => {
    if (person.person[0].name === "Max") {
      setPerson({
        person: [
          { name: name, age: 26 },
          { name: "Manu", age: 29 },
          { name: "Max", age: 28 },
        ],
      });
    } else {
      setPerson({
        person: [
          { name: "Max", age: 28 },
          { name: "Manu", age: 29 },
          { name: name, age: 26 },
        ],
      });
    }
  };

  const nameChangedHandler=(event) => {
        setPerson({
        person: [
          { name: "stephanie", age: 28 },
          { name: event.target.value, age: 29 },
          { name: "Max", age: 26 },
        ],
      })
  }

  /*  const style = {
      color: "green",
    }; */
  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      {/* <span style={style}>by Rahul</span> */}
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={person.person[0].name} age={person.person[0].age} />
      <Person 
        name={person.person[1].name} 
        age={person.person[1].age} 
        click={switchNameHandler.bind(this,'Maxi')}
        changed={nameChangedHandler}>
        My hobbies :: Racing
      </Person>
      <Person name={person.person[2].name} age={person.person[2].age} click={()=>switchNameHandler('Maximillian')}/>
    </div>
  );
  // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi I\'m a React App ',React.createElement('span',{style:{color:"green"}},'by Rahul Sharma')));
};
// class App extends Component {
//   state={
//     person:[
//       {name:'Max',age:28},
//       {name:'Manu',age:29},
//       {name:'stephanie',age:26}
//     ],
// otherState:"Some other value"
//   }
//   switchNameHandler=()=>{
//     if(this.state.person[0].name=='Max'){
//     this.setState({
//       person:[
//       {name:'stephanie',age:26},
//       {name:'Manu',age:29},
//       {name:'Max',age:28}]
//     })
//     }else{
//     this.setState({
//       person:[
//       {name:'Max',age:28},
//       {name:'Manu',age:29},
//       {name:'stephanie',age:26}]
//     })
//     }

//   }
//   render() {
//    /*  const style = {
//       color: "green",
//     }; */
//     return (
//       <div className="App">
//         <h1>Hi I'm a React App</h1>
//         {/* <span style={style}>by Rahul</span> */}
//         <p>This is really working</p>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
//         <Person name={this.state.person[1].name}  age={this.state.person[1].age} >My hobbies :: Racing</Person>
//         <Person name={this.state.person[2].name}  age={this.state.person[2].age}/>
//       </div>
//     );
//     // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi I\'m a React App ',React.createElement('span',{style:{color:"green"}},'by Rahul Sharma')));
//   }
// }

export default App;
