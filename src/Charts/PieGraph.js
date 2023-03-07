import React from 'react';
import "./LG.css"
import { PieChart,Pie, Tooltip} from "recharts";

const PieGraph = () => {

    const data=[
        { name: "Group A", value: 400 },
      { name: "Group B", value: 300 },
      { name: "Group C", value: 300 },
      { name: "Group D", value: 200 },
      { name: "Group E", value: 278 },
      { name: "Group F", value: 189 }
      ];

    return ( 
        <div>
          <div className="pieG1">
          <PieChart width={1000} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
          </div>
          <div className="pieG2">
          <PieChart width={1000} height={400}>
      <Pie
        dataKey="value"
        data={data}
        cx={500}
        cy={200}
        innerRadius={40}
        outerRadius={80}
        fill="#82ca9d"
      />
      <Tooltip />
    </PieChart>
          </div>
        </div>
     );
}
 
export default PieGraph;