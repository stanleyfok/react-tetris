class Grid {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    this.resetMap();
  }

  clone() {
    const newGrid = new Grid(this.rows, this.cols);
    newGrid.copyMap(this);

    return newGrid;
  }

  resetMap() {
    this.map = [];

    for (var i = 0; i < this.rows; i++) {
      const col = [];

      for (var j = 0; j < this.cols; j++) {
        col.push(false);
      }

      this.map.push(col);
    }

    return this;
  }

  copyMap(grid) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        this.map[i][j] = grid.map[i][j];
      }
    }

    return this;
  }

  addShape(shape) {
    const orientation = shape.getOrientation();
    const size = shape.size;
    const [x, y] = shape.position;

    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        // only check if the pixel on the shape is filled
        if (orientation[i][j] === 1) {
          const actualX = x + j;
          const actualY = y + i;

          if (
            actualX >= 0 &&
            actualX < this.cols &&
            actualY >= 0 &&
            actualY < this.rows
          ) {
            this.map[actualY][actualX] = true;
          }
        }
      }
    }

    return this;
  }

  hasCollision(shape) {
    const orientation = shape.getOrientation();
    const size = shape.size;

    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        // only check if the pixel on the shape is filled
        if (orientation[i][j] === 1) {
          const actualX = shape.position[0] + j;
          const actualY = shape.position[1] + i;

          // ignore if still above the top
          if (actualY < 0) {
            continue;
          }

          // check if hitting the bottom wall
          if (actualY >= this.rows) {
            return true;
          }

          // check if hitting the left and right walls
          if (actualX < 0 || actualX >= this.cols) {
            return true;
          }

          // check if hitting an unclear pixel
          if (this.map[actualY][actualX] === true) {
            return true;
          }
        }
      }
    }

    return false;
  }

  clearFullRows() {
    return this.clearFullRowsFromGridMap().padRowsToGridMap();
  }

  clearFullRowsFromGridMap = () => {
    const rowsToClear = [];

    // find unwanted rows to clear
    for (var i = 0; i < this.rows; i++) {
      var isRowFull = true;
      for (var j = 0; j < this.cols; j++) {
        isRowFull &= this.map[i][j];
      }

      if (isRowFull) {
        rowsToClear.push(i);
      }
    }

    // clear unwanted rows
    for (i = rowsToClear.length - 1; i >= 0; i--) {
      this.map.splice(rowsToClear[i], 1);
    }

    return this;
  };

  padRowsToGridMap = () => {
    const rowsToPad = this.rows - this.map.length;

    // append empty rows back
    for (var m = 0; m < rowsToPad; m++) {
      const col = [];

      for (var n = 0; n < this.cols; n++) {
        col.push(false);
      }

      this.map.unshift(col);
    }

    return this;
  };
}

export default Grid;
