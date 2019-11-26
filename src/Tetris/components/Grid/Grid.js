import React from "react";
import PropTypes from "prop-types";
import Pixel from "../Pixel/Pixel";

import "./Grid.css";

function Grid(props) {
  const { rows, cols, pixelMap } = props;

  const pixelRows = [];
  for (var i = 0; i < rows; i++) {
    const pixelCols = [];

    for (var j = 0; j < cols; j++) {
      var isFilled;

      try {
        isFilled = pixelMap[i][j];
      } catch {
        isFilled = false;
      }

      pixelCols.push(<Pixel key={`${i},${j}`} isFilled={isFilled} />);
    }

    pixelRows.push(<div key={`row-${i}`}>{pixelCols}</div>);
  }

  return <div className="grid">{pixelRows}</div>;
}

Grid.propTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number,
  pixelMap: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)).isRequired
};

Grid.defaultProps = {
  rows: 20,
  cols: 10
};

export default Grid;
