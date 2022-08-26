import React,{Component} from "react";
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
class Person extends Component {


  /* const style = {
    "@media (min-width:500px)": { width: "450px" }, 
  }; */

  //<p>I'm a {props.name} and I am {Math.floor(Math.random()*30)}years old.</p>

  /* const rnd = Math.random();
  if(rnd>0.7){
    throw new Error('Something went wrong');
  } */
   render(){
 console.log('[person.js] rendering...')
  return (
    // <StyleDiv>
    <div className={classes.Person}>
      <p onClick={this.props.click}>
        I'm a {this.props.name} and I am {this.props.age} years old.
      </p>
      <p>{this.props.children}</p>
      <input type="text" onChange={this.props.changed} value={this.props.name}></input>
    </div>
    // </StyleDiv>
  );
  }
};
export default Person;
// export default Radium(person);
