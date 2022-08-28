import React from "react";

/* const withClass = (props) => {
  return <div className={props.classes}>{props.children}</div>;
}; */

const withClass = (WrappedComponent, classes) => {
  return (props) => (
    <div className={classes}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
