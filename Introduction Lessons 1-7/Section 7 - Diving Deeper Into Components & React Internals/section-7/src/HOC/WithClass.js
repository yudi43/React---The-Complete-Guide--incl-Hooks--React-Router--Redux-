import React from "react";
//1st way
// const withClass = props => {
//   return <div className={props.classes}>{props.children}</div>;
// };

//2nd way
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
