import React, { Component } from 'react';

//components
import Titles from './components/Titles';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div>
        <Titles />
        <Table />
      </div>
    );
  }
}

export default App;
