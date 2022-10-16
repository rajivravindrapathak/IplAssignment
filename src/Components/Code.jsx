import React from 'react'
import { PieChart, Pie, Tooltip } from 'recharts';

const Code = () => {

  const data01 = [
    { name: 'mumbai indians', value: 100 },
    { name: 'delhi deardevils', value: 150 },
    { name: 'chennai super king', value: 100 },
    { name: 'kolkata knight riders', value: 200 },
    { name: 'sunrisers hydarabad', value: 278 },
    { name: 'lucknow super jants', value: 189 },
  ];
  
  const data02 = [
    { name: 'mumbai indians', value: 240 },
    { name: 'delhi deardevils', value: 167 },
    { name: 'chennai super king', value: 198 },
    { name: 'kolkata knight riders', value: 100 },
    { name: 'sunrisers hydarabad', value: 108 },
    { name: 'lucknow super jants', value: 120 },
  ];

  return (
    <div>
      <h1>Code Page</h1>
       <PieChart width={400} height={400} margin={300}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
        <PieChart width={400} height={400} margin={300}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
    </div>
  )
}

export default Code
