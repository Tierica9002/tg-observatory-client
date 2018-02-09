import React, { Component } from 'react';
import { BarChart, XAxis, YAxis, Legend, Tooltip, CartesianGrid, Bar } from 'recharts';
import openSocket from 'socket.io-client';
import mockData from '../mocks/chartData';

const socket = openSocket('http://localhost:5000');

function subscribeToMessages(cb) {
  socket.on('new_message', message => cb(null, message));
  // socket.emit('subscribeToTimer', 1000);
}


const margin = {
  top: 5,
  right: 30,
  left: 20,
  bottom: 5,
};

export default class Graph extends Component {
  constructor() {
    super();
    this.state = {
      data: mockData,
    };

    subscribeToMessages((err, message) => this.setState(prevState => {
      return {
        data: prevState.data.map(item => {
          if (item.tgUserId === message) {
            return {
              ...item,
              messagesCount: item.messagesCount + 1
            }
          }
          return item;
        })
      };
    }));
  }
  render() {
    return (
      <BarChart width={600} height={300} data={this.state.data} margin={margin}>
        <XAxis dataKey="name" />
        <YAxis dataKey="messagesCount" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="messagesCount" fill="#8884d8" label="Messages" />
      </BarChart>
    );
  }
}
