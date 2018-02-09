import React, { Component } from 'react';
import { BarChart, XAxis, YAxis, Legend, Tooltip, CartesianGrid, Bar } from 'recharts';

import mockData from '../mocks/chartData';

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
