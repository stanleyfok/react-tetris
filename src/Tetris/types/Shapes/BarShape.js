import Shape from "./Shape";

class BarShape extends Shape {
  constructor(props) {
    super(props);

    this.size = 4;
    this.orientations = [
      [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]
    ];
  }
}

export default BarShape;
