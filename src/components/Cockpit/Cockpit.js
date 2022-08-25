import React from 'react';
import classes from "./cockpit.css"

const cockpit=(props)=>{
    const assignedClasses = [];
    let btnClass ="";
    if(props.showPerson){
        btnClass = classes.red;
        }
    if (props.person.length <= 2) assignedClasses.push(classes.red);
    if (props.person.length <= 1) assignedClasses.push(classes.bold);
return (
    <div className={classes.cockpit}>
        <h1>{props.title?props.title:"Hi I'm a React App"}</h1>
        <p className={assignedClasses.join(" ")}>This is really working</p>
        <button
          onClick={props.clicked}
          className={btnClass}
        >
          Toggle Person
        </button>
    </div>
    );
};

export default cockpit;
