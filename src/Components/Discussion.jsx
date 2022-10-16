import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Discussion = () => {


  const data = [
    {
      name: 'Page A',
      uv: 200,
      pv: 200,
      amt: 200,
    },
    {
      name: 'Page B',
      uv: 300,
      pv: 198,
      amt: 210,
    },
    {
      name: 'Page C',
      uv: 200,
      pv: 120,
      amt: 290,
    },
    {
      name: 'Page D',
      uv: 280,
      pv: 308,
      amt: 200,
    },
    {
      name: 'Page E',
      uv: 190,
      pv: 300,
      amt: 211,
    },
    {
      name: 'Page F',
      uv: 230,
      pv: 100,
      amt: 200,
    },
    {
      name: 'Page G',
      uv: 190,
      pv: 100,
      amt: 200,
    },
  ];

  return (
    <div>
      <h1>Discussion page</h1>
       <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
          <Bar dataKey="uv" fill="#ffc658" />
        </BarChart>
    </div>
  )
}

export default Discussion
