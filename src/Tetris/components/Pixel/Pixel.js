import React from "react";
import PropTypes from "prop-types";

import "./Pixel.css";

function Pixel(props) {
  const { isFilled } = props;

  const classNames = ["pixel"];
  if (isFilled) {
    classNames.push("pixel--filled");
  }

  return <div className={classNames.join(" ")}></div>;
}

Pixel.propTypes = {
  isFilled: PropTypes.bool
};

Pixel.defaultProps = {
  isFilled: false
};

export default Pixel;
