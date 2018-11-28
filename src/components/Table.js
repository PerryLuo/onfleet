import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import io from 'socket.io-client';

// various code snippets taken from official documentation sites
// https://socket.io/docs/server-api/
// https://react-table.js.org/#/story/readme

class Table extends Component {
  state = {
    names: []
  };

  connectSocket = () => {
    const socketURL = 'http://localhost:3001/';
    const socket = io(socketURL);
    let lastDataSize = 0;
    socket.on('connect', () => {
      console.log('connected socket server');
    });
    socket.on('connect_error', () => {
      console.log('Error connecting to server');
    });
    socket.on('updates', (data) => {
      if (data.length > lastDataSize) {
        lastDataSize = data.length;
        this.setState({
          names: data
        });
      } else {
        socket.disconnect();
        console.log('Socket disconnected due to no new data');
      }
    });
  };

  disconnectSocket = () => {};

  componentDidMount() {
    this.connectSocket();
  }

  render() {
    // console.log(this.state.names);
    // console.log(this.state.names.length);
    const columns = [
      {
        Header: 'ID',
        accessor: 'number',
        sortable: false,
        style: {
          textAlign: 'center'
        }
      },
      {
        Header: 'Number',
        accessor: 'number',
        sortable: true,
        style: {
          textAlign: 'center'
        }
      },
      {
        Header: 'Name',
        accessor: 'name',
        sortable: false,
        style: {
          textAlign: 'center'
        }
      }
    ];
    return (
      <ReactTable
        columns={columns}
        data={this.state.names}
        noDataText="Loading..."
      />
    );
  }
}

export default Table;
