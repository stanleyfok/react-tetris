import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Pixel.css";

function Pixel(props) {
  const { isFilled } = props;

  const pixelClass = classNames({
    pixel: true,
    "pixel--filled": isFilled
  });

  return <div className={pixelClass}></div>;
}

Pixel.propTypes = {
  isFilled: PropTypes.bool
};

Pixel.defaultProps = {
  isFilled: false
};

export default Pixel;
