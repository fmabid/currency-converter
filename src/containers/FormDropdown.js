import React, { Component } from 'react';
import { connect } from 'react-redux';

import DropdownList from "../components/DropdownList";

class FormDropdown extends Component{
  state = {
    src: '',
    dest: '',
  };

  render() {
    return (
      <select className="form-control"
              value={this.state.src}
              onChange={(event) => this.props.onSelect(event.target.value)}>
        {
          this.props.lists.map(list => (
            <DropdownList
              key={Math.random()}
              element={list}/>
          ))
        } {console.log(this.source.source)}
      </select>
    );
  }
}



const mapStateToProps = state => {
  return{
    inputtedAmount: state.amount,
    storedResults: state.resultHistory,
    source: state.source,
    destination: state.destination,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect: (item) => dispatch({type: 'SLCT', payload: item}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDropdown);