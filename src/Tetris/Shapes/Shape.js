class Shape {
  constructor() {
    this.size = 0;
    this.orientations = null;
  }

  // render() {
  //   const { rotation } = this.props;
  //   const orientation = this.orientations[rotation % this.orientations.length];

  //   console.log(orientation);

  //   const pixelRows = [];
  //   for (var i = orientation.length - 1; i >= 0; i--) {
  //     const pixelCols = [];

  //     for (var j = 0; j < orientation[i].length; j++) {
  //       var isFilled;

  //       isFilled = orientation[i][j] === 1;

  //       pixelCols.push(<Pixel key={`${i},${j}`} isFilled={isFilled} />);
  //     }

  //     pixelRows.push(<div key={`row-${i}`}>{pixelCols}</div>);
  //   }

  //   return <div className="shape">{pixelRows}</div>;
  // }
}

export default Shape;
