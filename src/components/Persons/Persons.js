import React, { PureComponent } from "react";
// import React, { Component } from "react";
import Person from "./Person/Person";

// class Persons extends Component {
class Persons extends PureComponent {
  /*  static getDerivedStateFromProps(props,state){
    console.log('[persons.js] getDerivedStateFromProps');
    return state;
  } */

  /* componentWillReceiveProps(props){ // depreceated
    console.log('[persons.js] componentWillReceiveProps')
  } */

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[persons.js] shouldComponentUpdate");
  //   if (
  //     nextProps.person !== this.props.person ||
  //     nextProps.click !== this.props.click ||
  //     nextProps.changed !== this.props.changed
  //   ) {
  //     // these all checks are already check when we use pure component so we not use should component update in pure component
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   // return true; // it must return true or false
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[persons.js] getSnapshotBeforeUpdate");
    return null;
  }
  componentDidMount() {
    console.log("[persons.js] componentDidMount");
  }

  componentDidUpdate() {
    console.log("[persons.js] componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("[persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.person.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
          name={person.name}
          age={person.age}
          key={person.id}
          // isAuth={this.props.isAuthenticated}
        />
      );
    });
  }
}

export default Persons;
