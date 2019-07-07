import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import FormDropdown from './FormDropdown';

class LoadList extends Component{
  state = {
    list: []
  };

  componentDidMount() {
    axios.get('https://free.currconv.com/api/v7/currencies?apiKey=6e08d470b6ad5a313074')
      .then(response => {
        this.setState({
          list: Object.keys(response.data.results)
        });
      })
  }

  render() {
    return (
      <div className="w-25">
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">From</label>
          <FormDropdown lists={this.state.list}/>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">To</label>
          <FormDropdown lists={this.state.list}/>
        </div>
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