import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import io from 'socket.io-client';

class Table extends Component {
  state = {
    id: undefined,
    number: undefined,
    name: undefined
  };

  connectSocket = () => {
    const socketURL = 'http://localhost:3001/';
    const socket = io(socketURL);
    socket.on('connect', () => {
      console.log('connected socket server');
    });
    socket.on('updates', (data) => {
      data.map((x) => {
        console.log(x.number);
        console.log(x.name);
        this.setState({
          id: x.number,
          number: x.number,
          name: x.name
        });
      });
    });
  };

  componentDidMount() {
    this.connectSocket();
  }

  componentWillMount() {
    this.connectSocket();
  }

  render() {
    const columns = [
      {
        Header: 'ID',
        accesor: '{this.state.id}',
        sortable: false
      },
      {
        Header: 'Number',
        accesor: 'this.state.number',
        sortable: true
      },
      {
        Header: 'Name',
        accesor: '{this.state.name}',
        sortable: false
      }
    ];
    return (
      <div>
        <ReactTable
          columns={columns}
          data={this.state.data}
          noDataText={'Loading...'}
        />
      </div>
    );
  }
}

export default Table;
