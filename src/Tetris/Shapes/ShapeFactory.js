import SquareShape from "./SquareShape";
import BarShape from "./BarShape";
import FlipLShape from "./FlipLShape";
import LShape from "./LShape";
import SShape from "./SShape";
import TShape from "./TShape";
import ZShape from "./ZShape";

export const TOTAL_SHAPES = 7;

export const SHAPE_TYPES = {
  SQUARE: 0,
  T: 1,
  S: 2,
  Z: 3,
  BAR: 4,
  L: 5,
  FLIP_L: 6
};

class ShapeFactory {
  getShape = shape => {
    switch (shape) {
      case SHAPE_TYPES.SQUARE:
        return new SquareShape();
      case SHAPE_TYPES.T:
        return new TShape();
      case SHAPE_TYPES.S:
        return new SShape();
      case SHAPE_TYPES.Z:
        return new ZShape();
      case SHAPE_TYPES.BAR:
        return new BarShape();
      case SHAPE_TYPES.L:
        return new LShape();
      case SHAPE_TYPES.FLIP_L:
        return new FlipLShape();
      default:
        return new BarShape();
    }
  };

  getRandomShape = () => {
    const shape = Math.floor(Math.random() * TOTAL_SHAPES);

    return this.getShape(shape);
  };
}

export default ShapeFactory;
