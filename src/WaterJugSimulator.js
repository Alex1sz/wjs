import React, { Component } from 'react';
import {  breadthFirstSearch } from './utils/util';

export class WaterJugSimulator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      maxJugA: null,
      maxJugB: null,
      target: null,
      path: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    let path = breadthFirstSearch(
      Number.parseFloat(this.state.target), 
      Number.parseFloat(this.state.maxJugA), 
      Number.parseFloat(this.state.maxJugB)
    );

    this.setState({ path: path });
  }

  render() {
    const solution = this.state.path;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Jug A (gal)
            <input type="text" name="maxJugA" onChange={this.handleChange} />
          </label>
          <br />

          <label>
            Jug B (gal)
            <input type="text" name="maxJugB" onChange={this.handleChange} />
          </label>
          <br />

          <label>
            Target
            <input type="text" name="target" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>


        {solution && solution != 'No solution' && (
          <table className="table-wrapper">
            <thead>
              <tr className="row">
                <th>Step</th>
                <th>Action</th>
                <th>Jug A</th>
                <th>Jug B</th>
              </tr>
            </thead>
            <tbody>
            {solution.map((jugState, index) => {
              return (
                <tr key={`${index}-tr`}>
                  <td>{index}</td>
                  <td>{jugState.trace}</td>
                  <td>{jugState.jugA.value}</td>
                  <td>{jugState.jugB.value}</td>
                </tr>
              );
            })}
            </tbody>
          </table>
        )}
        {solution === 'No solution' && (
          `No solution...`
        )}
      </div>
    );
  }
}
export default WaterJugSimulator;
