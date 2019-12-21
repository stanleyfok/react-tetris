import ShapeFactory from "./types/Shapes/ShapeFactory";
import Grid from "./types/Grid";

class TetrisController {
  constructor(view, options) {
    const { rows, cols, tickInterval } = options;
    this.view = view;

    this.rows = rows;
    this.cols = cols;
    this.tickInterval = tickInterval;
  }

  deregisterView = () => {
    this.view = null;
  };

  startGame = () => {
    // game state
    this.shape = null;
    this.unclearedGrid = new Grid(this.rows, this.cols);
    this.displayGrid = new Grid(this.rows, this.cols);
    this.isGameOver = false;
    this.timer = setTimeout(this.doGameTick, 500);

    this.getNextShape();
  };

  endGame = () => {
    this.isGameOver = true;
  };

  doGameTick = () => {
    if (!this.isGameOver) {
      this.moveShapeDown();

      // do next tick
      this.timer = setTimeout(this.doGameTick, this.tickInterval);
    } else {
      alert("Game Over!");

      this.startGame();
    }
  };

  getNextShape = () => {
    this.shape = ShapeFactory.getRandomShape();
    this.shape.rotation = Math.floor(
      Math.random() * this.shape.orientations.length
    );
    this.shape.position = [
      Math.floor((this.cols - this.shape.size) / 2), // middle of tower
      -this.shape.size // top of tower
    ];
  };

  moveShapeDown = () => {
    this.shape.move([0, 1]);

    if (this.unclearedGrid.hasCollision(this.shape)) {
      // move back
      this.shape.move([0, -1]);

      if (this.shape.position[1] < 0) {
        this.endGame();
      } else {
        this.unclearedGrid.addShape(this.shape);

        this.unclearedGrid.clearFullRows();

        this.getNextShape();
      }
    }

    this.redraw();
  };

  moveShapeLeft = () => {
    this.shape.move([-1, 0]);

    if (this.unclearedGrid.hasCollision(this.shape)) {
      // move back
      this.shape.move([1, 0]);
    } else {
      this.redraw();
    }
  };

  moveShapeRight = () => {
    this.shape.move([1, 0]);

    if (this.unclearedGrid.hasCollision(this.shape)) {
      // move back
      this.shape.move([-1, 0]);
    } else {
      this.redraw();
    }
  };

  rotateShape = () => {
    this.shape.rotateClockwise();

    if (this.unclearedGrid.hasCollision(this.shape)) {
      // rotate back
      this.shape.rotateAntiClockwise();
    } else {
      this.redraw();
    }
  };

  redraw = () => {
    // update the display grid
    this.displayGrid = this.unclearedGrid.clone();
    this.displayGrid.addShape(this.shape);

    // update the view with game state
    if (this.view) {
      this.view.setState({
        displayGrid: this.displayGrid
      });
    }
  };
}

export default TetrisController;
