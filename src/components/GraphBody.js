import React from 'react';

export default class GraphBody extends React.Component {


  largest(column) {
    var column = this.props.data.map(function(value, index) {
      return value[column];
    });
    let highest = Math.max.apply(Math, column);
    return highest;
  }
  argMax(data) {
    return data.map(a => Math.max(...a))
  }

  prepareData() {
    let d = [`M 0 0`];
    let largestX = this.largest(0);
    let largestY = this.largest(1)
    let someProps = this.props
    let collector = this.props.data.map(chunk => {
      let xNext = (chunk[0] / largestX) * 100;
      let yNext = (chunk[1] / largestY) * 100;
      let str = `L ${xNext} ${yNext}`
      return str

    });
    let concat = d.concat(collector).join(' ');
    console.log(concat)
    return concat
  }
  render() {
    let d = this.prepareData();
    return ( <
      path
      d = {
        d
      }
      stroke = "orange"
      strokeWidth = {
        1
      }
      vectorEffect = "non-scaling-stroke"
      fill = "none" /
      >
    )
  }
}
