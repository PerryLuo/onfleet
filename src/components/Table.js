import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import io from 'socket.io-client';

class Table extends Component {
  state = {
    socket: null,
    ID: undefined,
    Number: undefined,
    Name: undefined
  };

  connectSocket = () => {
    const socketURL = 'http://localhost:3001/';
    const socket = io(socketURL);
    socket.on('connect', () => {
      console.log('connected websocket server');
    });
    socket.on('updates', (data) => {
      console.log(data);
      this.setState({
        ID: data.number,
        Number: data.number,
        Name: data.name
      });
    });
  };

  componentWillMount() {
    this.connectSocket();
  }

  render() {
    const data = [
      {
        Header: 'ID',
        accesor: 'this.state.number',
        sortable: false
      },
      {
        Header: 'Number',
        accesor: '{this.state.number}',
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
        <ReactTable columns={data} data={data} noDataText={'Loading...'} />
      </div>
    );
  }
}

export default Table;
