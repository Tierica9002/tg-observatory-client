import React, { Component } from 'react';
import { BarChart, XAxis, YAxis, Legend, Tooltip, CartesianGrid, Bar } from 'recharts';

import mockData from '../mocks/chartData';

export default class Graph extends Component {
  constructor() {
    super();
    this.state = {
      data: mockData,
    };
  }
  render() {
    return (
      <BarChart
        width={600}
        height={300}
        data={this.state.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    );
  }
}
