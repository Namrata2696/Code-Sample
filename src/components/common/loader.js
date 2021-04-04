import React, { Fragment } from "react";

function Loader() {
  return (
    <Fragment>
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    </Fragment>
  );
}

export default Loader;
