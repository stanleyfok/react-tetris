import React from "react";
import PropTypes from "prop-types";
import Pixel from "../Pixel/Pixel";

import "./Grid.css";

function Grid(props) {
  const { rows, cols, map } = props.grid;

  const pixelRows = [];
  for (var i = 0; i < rows; i++) {
    const pixelCols = [];

    for (var j = 0; j < cols; j++) {
      pixelCols.push(<Pixel key={`${i},${j}`} isFilled={map[i][j]} />);
    }

    pixelRows.push(<div key={`row-${i}`}>{pixelCols}</div>);
  }

  return <div className="grid">{pixelRows}</div>;
}

Grid.propTypes = {
  grid: PropTypes.object.isRequired
};

export default Grid;
