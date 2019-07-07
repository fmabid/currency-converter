import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import DropdownList from "../components/DropdownList";

class LoadList extends Component{
  /*  initial state */
  state = {
    lists: [],
    src: '',
    dest: '',
    inp: '',
    history: [],
    result: '',
  };

  componentDidMount() {
    /*  list of all currency codes  */
    axios.get('https://free.currconv.com/api/v7/currencies?apiKey=6e08d470b6ad5a313074')
      .then(response => {
        this.setState({
          lists: Object.keys(response.data.results)
        });
      })
  }

  /*  handler to convert the given amount, save history */
  convertDataHandler = () => {
    const data = {
      lists: this.state.lists,
      src: this.state.src,
      dest: this.state.dest,
      inp: this.state.inp,
    };

    const key = data.src+'_'+data.dest;
    axios.get('https://free.currconv.com/api/v7/convert?q='+key+'&compact=ultra&apiKey=6e08d470b6ad5a313074')
      .then(response => {
        const cont = response.data;
        let result = cont[key];

        result = result * this.state.inp;
        this.setState({
          history: this.state.history.concat(result),
          result: result,
        });
        /*console.log(result);
        console.log(this.state.history);*/
      });
  };

  render() {
    return (
      <div className="mt-5">
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
        </div>{/* @end select currency */}

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
        </div>{/* @end select currency */}

        <div className="form-group">
          <input type="text" className="form-control"
                 onChange={(event => this.setState({inp: event.target.value}))}/>
        </div>{/* input field */}

        <div className="d-block float-right ">
          <button className="btn btn-dark" onClick={this.convertDataHandler}>Convert</button>
        </div>

        <div className="clearfix d-inline-block mt-5">
          <h4 className="mt-5 clearfix">Result = {this.state.result}</h4>

          <div className="card my-4">
            <div className="card-header">
              History:
            </div>
            <ul className="list-group list-group-flush">
              {
                this.state.history.map(elm => (
                  <li className="list-group-item"
                    key={Math.random()}>{elm} {' (' + this.state.src + ' to ' + this.state.dest +')'}</li>
                ))
              }
            </ul>
          </div>


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