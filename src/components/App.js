import React, {
  Component
} from 'react';

import './App.css';
import Graph from './graph';

export default class App extends React.Component {

  state = { dataSetIndex: 0 }

  selectDataset(event) {
   this.setState({dataSetIndex: event.target.value});
 }

  render() {
    let options = this.props.datasets.map((_, index) => {
     return <option key={index} value={index}>Dataset {index + 1}</option>
   });

   return (
   <div className = "App">
   <Graph data={this.props.datasets[this.state.dataSetIndex]} />
   <hr />
     <select
       value={this.state.dataSetIndex}
       onChange={this.selectDataset.bind(this)} >
       {options}
     </select>

   </div>
 )
  }
}
