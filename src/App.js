import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import LoadList from './containers/LoadList';

function App() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="offset-4"></div>

          <div className="col-sm-4">
            <LoadList/>
          </div>

          <div className="offset-4"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
