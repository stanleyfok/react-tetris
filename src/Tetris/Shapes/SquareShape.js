import Shape from "./Shape";

class SquareShape extends Shape {
  constructor(props) {
    super(props);

    this.size = 2;
    this.orientations = [
      [
        [1, 1],
        [1, 1]
      ]
    ];
  }
}

export default SquareShape;
