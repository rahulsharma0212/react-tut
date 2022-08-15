import React from "react";
/* import "./Person.css"; */
import classes from "./Person.css";
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

const person = (props) => {
  /* const style = {
    "@media (min-width:500px)": { width: "450px" }, 
  }; */

  //<p>I'm a {props.name} and I am {Math.floor(Math.random()*30)}years old.</p>

  return (
    // <StyleDiv>
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm a {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
    // </StyleDiv>
  );
};
export default person;
// export default Radium(person);
