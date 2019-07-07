import React, { Component } from 'react';
import { connect } from 'react-redux';

import DropdownList from "../components/DropdownList";

class FormDropdown extends Component{
  render() {
    return (
      <select className="form-control">
        {
          this.props.lists.map(list => (
            <DropdownList
              key={Math.random()}
              element={list}/>
          ))
        }
      </select>
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
    onSelect: (item) => dispatch({type: 'SLCT', payload: item}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDropdown);