class Shape {
  constructor() {
    this.size = 0;
    this.orientations = null;
    this.position = [0, 0];
    this.rotation = 0;
  }

  getOrientation() {
    return this.orientations[this.rotation];
  }

  move(vector) {
    this.position[0] += vector[0];
    this.position[1] += vector[1];

    return this;
  }

  rotateClockwise() {
    this.rotation = (this.rotation + 1) % this.orientations.length;

    return this;
  }

  rotateAntiClockwise() {
    this.rotation =
      (this.rotation - 1 + this.orientations.length) % this.orientations.length;

    return this;
  }
}

export default Shape;
