import React, { Component } from "react";
/* import "./Person.css"; */
import classes from "./Person.css";
// import Auxillary from "../../../hoc/Auxilliary";
import withClass from "../../../hoc/withClass";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";
/* import Radium from "radium"; */
// import styled from "styled-components";

// const StyleDiv = styled.div`
//   width: 60%;
//   margin: 20px auto;
//   border: 1px solid #ccc;
//   padding: 10px;
//   text-align: center;
//   box-shadow: 1px 2px #ccc;

//   @media (min-width: 500px) {
//     width: 450px;
//   }
// `;
class Person extends Component {
  constructor(props) {
    super(props);
    this.currentElementref = React.createRef();
  }

  static contextType = AuthContext;
  /* const style = {
    "@media (min-width:500px)": { width: "450px" }, 
  }; */

  //<p>I'm a {props.name} and I am {Math.floor(Math.random()*30)}years old.</p>

  /* const rnd = Math.random();
  if(rnd>0.7){
    throw new Error('Something went wrong');
  } */

  componentDidMount() {
    // this.inputElement.focus();
    this.currentElementref.current.focus();
    console.log(this.context);
  }

  render() {
    console.log("[person.js] rendering...");
    // return (
    //   // <StyleDiv>
    //   <div className={classes.Person}>
    //     <p onClick={this.props.click}>
    //       I'm a {this.props.name} and I am {this.props.age} years old.
    //     </p>
    //     <p>{this.props.children}</p>
    //     <input type="text" onChange={this.props.changed} value={this.props.name}></input>
    //   </div>
    //   // </StyleDiv>
    // );

    /*
    return [
      <p key="i1" onClick={this.props.click}>
        I'm a {this.props.name} and I am {this.props.age} years old.
      </p>,
      <p key="i2">{this.props.children}</p>,
      <input
        key="i3"
        type="text"
        onChange={this.props.changed}
        value={this.props.name}
      ></input>,
    ];
    */
    return (
      // <Auxillary>
      <React.Fragment>
        {/* <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? <p>authenticated</p> : <p>please log in</p>
          }
        </AuthContext.Consumer> */}
        {this.context.authenticated ? (
          <p>authenticated</p>
        ) : (
          <p>please log in</p>
        )}
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={(inputEl) => {
          //   inputEl.focus();
          // }}
          // ref={(inputEl) => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.currentElementref}
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </React.Fragment>
      // </Auxillary>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};
export default withClass(Person, classes.Person);
// export default Person;
// export default Radium(person);
