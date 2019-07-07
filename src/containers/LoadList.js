import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import FormDropdown from './FormDropdown';
import DropdownList from "../components/DropdownList";

class LoadList extends Component{
  state = {
    lists: [],
    src: '',
    dest: '',
    inp: '',
  };

  componentDidMount() {
    axios.get('https://free.currconv.com/api/v7/currencies?apiKey=6e08d470b6ad5a313074')
      .then(response => {
        this.setState({
          lists: Object.keys(response.data.results)
        });
      })
  }

  render() {
    return (
      <div className="w-50">
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">From</label>

          <select className="form-control" value={this.state.src}
                  onChange={(event) => this.setState({src: event.target.value})}>
            {
              this.state.lists.map(list => (
                <DropdownList
                  key={Math.random()}
                  element={list}/>
              ))
            }
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">To</label>

          <select className="form-control" value={this.state.dest}
                  onChange={(event) => this.setState({dest: event.target.value})}>
            {
              this.state.lists.map(list => (
                <DropdownList
                  key={Math.random()}
                  element={list}/>
              ))
            }
          </select>
        </div>

        <div className="form-group">
          <input type="text" className="form-control"
                 onChange={(event => this.setState({inp: event.target.value}))}/>
        </div>
        <button >Convert</button>

        <h4 className="mt-5">Result: {this.state.dest}</h4>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return{
    inputtedAmount: state.amount,
    storedResults: state.resultHistory
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadList);