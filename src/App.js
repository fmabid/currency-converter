import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import LoadList from './containers/LoadList';

function App() {
  return (
    <div className="container-fluid">
      <div className="container">
        <LoadList/>
      </div>
    </div>
  );
}

export default App;
