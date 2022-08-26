import React ,{useEffect}from 'react';
import classes from "./cockpit.css"

const cockpit=(props)=>{
    useEffect(()=>{
      console.log('[cockpit.js] useEffect');
      //http request ...
      const timer=setTimeout(()=>{alert('Saved Data to cloud')},1000)
      return ()=>{
        console.log('[cockpit.js] cleanup work in use effect');
        clearTimeout(timer);
      }

    },[]);  // run only 1st time
   // },[props.person]);  // to run for first time initially and not run afterwards

    useEffect(()=>{
      console.log('[cockpit.js] 2nd useEffect');
      return ()=>{
        console.log('[cockpit.js] cleanup work in 2nd use effect');
      }
    });  // run all the time because we not pass any 2nd argument

    const assignedClasses = [];
    let btnClass ="";
    if(props.showPerson){
        btnClass = classes.red;
        }
    if (props.personLength <= 2) assignedClasses.push(classes.red);
    if (props.personLength <= 1) assignedClasses.push(classes.bold);
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

export default React.memo(cockpit);
// export default cockpit;
