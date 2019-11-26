import ShapeFactory from "./Shapes/ShapeFactory";

const ROWS = 20;
const COLS = 10;

class TetrisController {
  constructor(view) {
    this.view = view;

    this.shapeFactory = new ShapeFactory();
  }

  deregisterView = () => {
    this.view = null;
  };

  initGame = () => {
    // game state
    this.shape = null;
    this.shapePosition = [0, 0];
    this.shapeRotation = 0;
    this.unclearPixelMap = this.getEmptyPixelMap();
    this.isSpeedUp = false;
    this.isGameEnded = false;
    this.timer = null;
  };

  startGame = () => {
    this.timer = setTimeout(this.doGameTick, 500);

    this.getNextShape();
  };

  endGame = () => {
    this.isGameEnded = true;

    alert("Game Over!");
  };

  doGameTick = () => {
    if (!this.isGameEnded) {
      // move the block down 1 pixel
      this.moveShapeDown();

      // do next tick
      this.timer = setTimeout(this.doGameTick, this.isSpeedUp ? 200 : 500);
    } else {
      this.initGame();
      this.startGame();
    }
  };

  updateView = pixelMap => {
    if (this.view) {
      this.view.setState({
        pixelMap
      });
    }
  };

  getEmptyPixelMap = () => {
    const pixelMap = [];

    for (var i = 0; i < ROWS; i++) {
      const col = [];

      for (var j = 0; j < COLS; j++) {
        col.push(false);
      }

      pixelMap.push(col);
    }

    return pixelMap;
  };

  addShapeToUnclearPixelMap = () => {
    const orientation = this.shape.orientations[this.shapeRotation];
    const size = this.shape.size;
    const [x, y] = this.shapePosition;

    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        // only check if the pixel on the shape is filled
        if (orientation[i][j] === 1) {
          const actualX = x + j;
          const actualY = y + i;

          if (
            actualX >= 0 &&
            actualX < COLS &&
            actualY >= 0 &&
            actualY < ROWS
          ) {
            this.unclearPixelMap[actualY][actualX] = true;
          }
        }
      }
    }
  };

  calculatePixelMap = () => {
    const pixelMap = this.getEmptyPixelMap();
    const orientation = this.shape.orientations[this.shapeRotation];
    const size = this.shape.size;
    const [x, y] = this.shapePosition;

    for (var i = 0; i < ROWS; i++) {
      for (var j = 0; j < COLS; j++) {
        pixelMap[i][j] = this.unclearPixelMap[i][j];
      }
    }

    for (i = 0; i < size; i++) {
      for (j = 0; j < size; j++) {
        // only check if the pixel on the shape is filled
        if (orientation[i][j] === 1) {
          const actualX = x + j;
          const actualY = y + i;

          if (
            actualX >= 0 &&
            actualX < COLS &&
            actualY >= 0 &&
            actualY < ROWS
          ) {
            pixelMap[actualY][actualX] = true;
          }
        }
      }
    }

    return pixelMap;
  };

  hasCollision = (shapePosition, shapeRotation) => {
    const orientation = this.shape.orientations[shapeRotation];
    const size = this.shape.size;
    const [x, y] = shapePosition;

    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        // only check if the pixel on the shape is filled
        if (orientation[i][j] === 1) {
          const actualX = x + j;
          const actualY = y + i;

          // ignore if still above the top
          if (actualY < 0) {
            continue;
          }

          // check if hitting the bottom wall
          if (actualY >= ROWS) {
            return true;
          }

          // check if hitting the left and right walls
          if (actualX < 0 || actualX >= COLS) {
            return true;
          }

          // check if hitting an unclear pixel
          if (this.unclearPixelMap[actualY][actualX] === true) {
            return true;
          }
        }
      }
    }

    return false;
  };

  isGameOver = () => {
    const orientation = this.shape.orientations[this.shapeRotation];
    const size = this.shape.size;
    const y = this.shapePosition[1];

    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        // only check if the pixel on the shape is filled
        if (orientation[i][j] === 1) {
          const actualY = y + i;

          // ignore if still above the top
          if (actualY < 0) {
            return true;
          }
        }
      }
    }

    return false;
  };

  findRowsToClear = () => {
    const rowsToClear = [];

    for (var i = 0; i < ROWS; i++) {
      var isRowFull = true;
      for (var j = 0; j < COLS; j++) {
        isRowFull &= this.unclearPixelMap[i][j];
      }

      if (isRowFull) {
        rowsToClear.push(i);
      }
    }

    return rowsToClear;
  };

  clearRows = rowsToClear => {
    // clear unwanted rows
    for (var i = rowsToClear.length - 1; i >= 0; i--) {
      this.unclearPixelMap.splice(rowsToClear[i], 1);
    }

    // append empty rows back
    for (var m = 0; m < rowsToClear.length; m++) {
      const col = [];

      for (var n = 0; n < COLS; n++) {
        col.push(false);
      }

      this.unclearPixelMap.unshift(col);
    }
  };

  getNextShape = () => {
    this.shape = this.shapeFactory.getRandomShape();
    this.shapeRotation = Math.floor(
      Math.random() * this.shape.orientations.length
    );
    this.shapePosition = [
      Math.floor((COLS - this.shape.size) / 2), // middle of tower
      -this.shape.size // top of tower
    ];
  };

  moveShapeDown = () => {
    const newShapePosition = [this.shapePosition[0], this.shapePosition[1] + 1];

    if (!this.hasCollision(newShapePosition, this.shapeRotation)) {
      this.shapePosition = [...newShapePosition];
    } else {
      if (this.isGameOver()) {
        this.endGame();
      } else {
        this.addShapeToUnclearPixelMap();

        const rowsToClear = this.findRowsToClear();
        this.clearRows(rowsToClear);

        this.getNextShape();
      }
    }

    this.redraw();
  };

  moveShapeLeft = () => {
    const newShapePosition = [this.shapePosition[0] - 1, this.shapePosition[1]];

    if (!this.hasCollision(newShapePosition, this.shapeRotation)) {
      this.shapePosition = [...newShapePosition];

      this.redraw();
    }
  };

  moveShapeRight = () => {
    const newShapePosition = [this.shapePosition[0] + 1, this.shapePosition[1]];

    if (!this.hasCollision(newShapePosition, this.shapeRotation)) {
      this.shapePosition = [...newShapePosition];

      this.redraw();
    }
  };

  rotateShape = () => {
    const totalOrientations = this.shape.orientations.length;
    const newShapeRotation = (this.shapeRotation + 1) % totalOrientations;

    if (!this.hasCollision(this.shapePosition, newShapeRotation)) {
      this.shapeRotation = newShapeRotation;

      this.redraw();
    }
  };

  speedUp = () => {
    this.isSpeedUp = true;

    clearTimeout(this.timer);

    // schedule anotehr game tick
    this.doGameTick();
  };

  speedDown = () => {
    this.isSpeedUp = false;
  };

  redraw = () => {
    // update the pixelMap
    const pixelMap = this.calculatePixelMap();

    // update the view with game state
    this.updateView(pixelMap);
  };
}

export default TetrisController;
