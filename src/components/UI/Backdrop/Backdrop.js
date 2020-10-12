import React from "react";

import classes from "./Backdrop.css";

function backdrop(props) {
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;
}

export default backdrop;
