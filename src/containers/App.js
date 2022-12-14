import React, { Component } from "react";
// import React, { useState } from "react";
// import "./App.css";
import classes from "./App.css"; // in react-script greater than v2 import classes from "./App.module.css";
// import Person from "../components/Persons/Person/Person";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Auxillary from "../hoc/Auxilliary";
import AuthContext from "../context/auth-context";
// import styled from "styled-components";
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

// const StyleButton = styled.button`
//   background-color: ${(props) => (props.alt === "true" ? "red" : "green")};
//   color: white;
//   font: inherit;
//   border: 2px solid blue;
//   cursor: pointer;
//   padding: 8px;

//   &:hover {
//     color: black;
//     background-color: ${(props) =>
//       props.alt === "true" ? "salmon" : "lightgreen"};
//   }
// `;

/* import Radium, { StyleRoot } from "radium"; */
// const App = (props) => {
//   const [person, setPerson] = useState({
//     person: [
//       { name: "stephanie", age: 26 },
//       { name: "Manu", age: 29 },
//       { name: "Max", age: 28 },
//     ],
//   });
//   // const [otherState,setotherState] = useState({ otherState: "Some other value" });
//   // console.log(person,otherState);
//   const switchNameHandler = (name) => {
//     if (person.person[0].name === "Max") {
//       setPerson({
//         person: [
//           { name: name, age: 26 },
//           { name: "Manu", age: 29 },
//           { name: "Max", age: 28 },
//         ],
//       });
//     } else {
//       setPerson({
//         person: [
//           { name: "Max", age: 28 },
//           { name: "Manu", age: 29 },
//           { name: name, age: 26 },
//         ],
//       });
//     }
//   };

//   const nameChangedHandler=(event) => {
//         setPerson({
//         person: [
//           { name: "stephanie", age: 28 },
//           { name: event.target.value, age: 29 },
//           { name: "Max", age: 26 },
//         ],
//       })
//   }

//    const style = {
//       color: "green",
//       backgroundColor: "White",
//       font:'inherit',
//       border:'2px solid blue',
//       cursor:'pointer',
//       padding:'8px'
//     };
//   return (
//     <div className="App">
//       <h1>Hi I'm a React App</h1>
//       {/* <span style={style}>by Rahul</span> */}
//       <p>This is really working</p>
//       <button onClick={switchNameHandler.bind(this,'louis')} style={style}>Switch Name</button>
//       <Person name={person.person[0].name} age={person.person[0].age} />
//       <Person
//         name={person.person[1].name}
//         age={person.person[1].age}
//         click={switchNameHandler.bind(this,'Maxi')}
//         changed={nameChangedHandler}>
//         My hobbies :: Racing
//       </Person>
//       <Person name={person.person[2].name} age={person.person[2].age} click={()=>switchNameHandler('Maximillian')}/>
//     </div>
//   );
//   // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi I\'m a React App ',React.createElement('span',{style:{color:"green"}},'by Rahul Sharma')));
// };
// class App extends Component {
//   state = {
//     person: [
//       { id: "sdad", name: "Max", age: 28 },
//       { id: "mnafd", name: "Manu", age: 29 },
//       { id: "fdf", name: "stephanie", age: 26 },
//     ],
//     otherState: "Some other value",
//     showPerson: false,
//   };
//   /*   switchNameHandler = (newName) => {
//     this.setState({
//       person: [
//         { name: newName, age: 26 },
//         { name: "Manu", age: 29 },
//         { name: "stephanie", age: 28 },
//       ],
//     });
//   }; */
//   deletePersonHandler = (deleteIndex) => {
//     // const persons = [...this.state.person];
//     const persons = this.state.person.slice();
//     persons.splice(deleteIndex, 1);
//     this.setState({ person: persons });
//   };
//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.person.findIndex((p) => {
//       return p.id === id;
//     });
//     const person = { ...this.state.person[personIndex] };
//     person.name = event.target.value;
//     const persons = [...this.state.person];
//     persons[personIndex] = person;
//     this.setState({
//       person: persons,
//     });
//   };
//   togglePersonHandler = () => {
//     const doesShow = this.state.showPerson;
//     this.setState({ showPerson: !doesShow });
//   };
//   render() {
//     // const style = {
//     //   backgroundColor: "green",
//     //   color: "white",
//     //   font: "inherit",
//     //   border: "2px solid blue",
//     //   cursor: "pointer",
//     //   padding: "8px",
//     //   /*       ":hover": {
//     //     color: "black",
//     //     backgroundColor: "lightgreen",
//     //   }, */
//     // };

//     let person = null;
//     /* let btnClass = [classes.Button]; */
//     /*     if (this.state.showPerson) {
//       person = (
//         <div>
//           <Person
//             name={this.state.person[0].name}
//             age={this.state.person[0].age}
//           />
//           <Person
//             name={this.state.person[1].name}
//             age={this.state.person[1].age}
//             click={this.switchNameHandler.bind(this, "Max !")}
//             changed={this.nameChangedHandler}
//           >
//             My hobbies :: Racing
//           </Person>
//           <Person
//             name={this.state.person[2].name}
//             age={this.state.person[2].age}
//           />
//         </div>
//       );
//     } */

//     if (this.state.showPerson) {
//       person = (
//         <div>
//           <Persons
//           person={this.state.person}
//           clicked = {this.deletePersonHandler}
//           changed={this.nameChangedHandler}/>
//           {/*this.state.person.map((person, index) => {
//             return (

//               <ErrorBoundary key={person.id}>
//               <Person
//                 click={() => this.deletePersonHandler(index)}
//                 changed={(event) => this.nameChangedHandler(event, person.id)}
//                 name={person.name}
//                 age={person.age}
//                 key={person.id}
//               />
//               </ErrorBoundary>
//             );
//           })*/}
//         </div>
//       );
//       // style.backgroundColor = "red";
//       /*       style[":hover"] = {
//         color: "black",
//         backgroundColor: "salmon",
//       }; */
//       /* btnClass.push(classes.Red); */
//     }
//     /* let assignedClasses = [];
//     if (this.state.person.length <= 2) assignedClasses.push(classes.red);
//     if (this.state.person.length <= 1) assignedClasses.push(classes.bold); */
//     /*    if (this.state.person.length <= 2) assignedClasses.push("red");
//     if (this.state.person.length <= 1) assignedClasses.push("bold") */ return (
//       // <StyleRoot>
//       // <div className="App">
//       <div className={classes.App}>
//        {/*  <h1>Hi I'm a React App</h1> */}
//         {/* <span style={style}>by Rahul</span> */}
//         {/* <p className={assignedClasses.join(" ")}>This is really working</p> */}
//         {/* <button onClick={this.togglePersonHandler} style={style}>
//           Toggle Person
//         </button> */}
//         {/* <button
//           onClick={this.togglePersonHandler}
//           className={btnClass.join(" ")}
//         >
//           Toggle Person
//         </button> */}
//         {/* <StyleButton
//           onClick={this.togglePersonHandler}
//           alt={this.state.showPerson.toString()}
//         >
//           Toggle Person
//         </StyleButton> */}
//         <Cockpit
//         title={this.props.appTitle}
//         showPerson ={this.state.showPerson}
//         person={this.state.person}
//         clicked={this.togglePersonHandler}/>
//         {person}

//         {/* {this.state.showPerson ? (
//           <div>
//             <Person
//               name={this.state.person[0].name}
//               age={this.state.person[0].age}
//             />
//             <Person
//               name={this.state.person[1].name}
//               age={this.state.person[1].age}
//               click={this.switchNameHandler.bind(this, "Max !")}
//               changed={this.nameChangedHandler}
//             >
//               My hobbies :: Racing
//             </Person>
//             <Person
//               name={this.state.person[2].name}
//               age={this.state.person[2].age}
//             />
//           </div>
//         ) : null} */}
//       </div>
//       // </StyleRoot>
//     );
//     // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi I\'m a React App ',React.createElement('span',{style:{color:"green"}},'by Rahul Sharma')));
//   }
// }

/**Lifcycle of react */
class App extends Component {
  constructor(props) {
    super(props);
    console.log(
      "[App.js] constructor"
    ); /* you can also initiallize state here */
    /* this.state =  */
  }

  state = {
    person: [
      { id: "sdad", name: "Max", age: 28 },
      { id: "mnafd", name: "Manu", age: 29 },
      { id: "fdf", name: "stephanie", age: 26 },
    ],
    otherState: "Some other value",
    showPerson: false,
    showCockpit: true,
    changedCounter: 0,
    authenticated: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }
  /*  componentWillMount(){ //depreceated
    console.log('[App.js] componentWillMount');
  } */

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  deletePersonHandler = (deleteIndex) => {
    const persons = this.state.person.slice();
    persons.splice(deleteIndex, 1);
    this.setState({ person: persons });
  };
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.person[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        person: persons,
        changedCounter: prevState.changedCounter + 1,
      };
    });
  };
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };
  authHandler = () => {
    this.setState({
      authenticated: true,
    });
  };
  render() {
    console.log("[App.js] render");
    let person = null;

    if (this.state.showPerson) {
      person = (
        <div>
          <Persons
            person={this.state.person}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            // isAuthenticated={this.state.authenticated}
          />
        </div>
      );
    }
    return (
      // <div className={classes.App}>
      // <WithClass classes={classes.App}>
      <Auxillary>
        <button onClick={() => this.setState({ showCockpit: false })}>
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.authHandler,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPerson={this.state.showPerson}
              personLength={this.state.person.length}
              clicked={this.togglePersonHandler}
              // login={this.authHandler}
            />
          ) : null}
          {person}
        </AuthContext.Provider>
      </Auxillary>
      // </WithClass>
      //  </div>
    );
  }
}

export default withClass(App, classes.App);
// export default App;
// export default Radium(App);
