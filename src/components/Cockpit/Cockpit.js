import React, { useEffect, useRef, useContext } from "react";
import classes from "./cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
  const btnRef = useRef(null);
  const authContext = useContext(AuthContext);
  console.log("[cockpit.js]", authContext);
  useEffect(() => {
    console.log("[cockpit.js] useEffect");
    //http request ...
    // const timer=setTimeout(()=>{alert('Saved Data to cloud')},1000)
    btnRef.current.click();
    return () => {
      console.log("[cockpit.js] cleanup work in use effect");
      // clearTimeout(timer);
    };
  }, []); // run only 1st time
  // },[props.person]);  // to run for first time initially and not run afterwards

  useEffect(() => {
    console.log("[cockpit.js] 2nd useEffect");
    return () => {
      console.log("[cockpit.js] cleanup work in 2nd use effect");
    };
  }); // run all the time because we not pass any 2nd argument

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPerson) {
    btnClass = classes.red;
  }
  if (props.personLength <= 2) assignedClasses.push(classes.red);
  if (props.personLength <= 1) assignedClasses.push(classes.bold);
  return (
    <div className={classes.cockpit}>
      <h1>{props.title ? props.title : "Hi I'm a React App"}</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button onClick={props.clicked} className={btnClass} ref={btnRef}>
        Toggle Person
      </button>
      {/* <button onClick={props.login}>Log in</button> */}
      {/* <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer> */}
      <button onClick={authContext.login}>Log In</button>
    </div>
  );
};

export default React.memo(cockpit);
// export default cockpit;
