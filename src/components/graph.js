import React, { Component } from 'react'

import GraphBody from './GraphBody'
import Axis from './axis'

export default class Graph extends React.Component {



  render() {
    return (


      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">

          <GraphBody
            x={0}
            y={0}
            data={this.props.data}
          />
</svg>

    )
  }
}
