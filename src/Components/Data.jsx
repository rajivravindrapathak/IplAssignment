import React from 'react'
import { Link } from 'react-router-dom'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'

const Data = () => {

  const data = [
    {
      name: 'lucknow super jants',
      uv: 400,
      pv: 240,
      amt: 240,
    },
    {
      name: 'mumbai indians',
      uv: 300,
      pv: 139,
      amt: 221,
    },
    {
      name: 'kolkata knight riders',
      uv: 200,
      pv: 180,
      amt: 229,
    },
    {
      name: 'delhi deardevils',
      uv: 270,
      pv: 150,
      amt: 200,
    },
    {
      name: 'chennai super kings',
      uv: 190,
      pv: 210,
      amt: 125,
    },
    {
      name: 'sunrigers hydarabad',
      uv: 239,
      pv: 100,
      amt: 200,
    },
    {
      name: 'rajasthan rayals',
      uv: 190,
      pv: 100,
      amt: 100,
    },
  ];

  return (
    <div>
      <h1>About Dataset</h1>
      <p><b>Context</b></p>
      <p>There's a story behind every dataset and here's your opportunity to share yours.</p>
      <p><b>Content</b></p>
      <p>What's inside is more than just rows and columns. Make it easy for others to get started by describing how you acquired the data and what time period it represents, too.</p>
      <div>
      <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
        </div>
    </div>
  )
}

export default Data
