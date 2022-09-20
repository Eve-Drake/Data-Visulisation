import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts";

const RenderData = ({dataArray}) => {
    
  return (
    <div>
        <div>
            <LineChart
                width={500}
                height={300}
                data={dataArray}
                margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                        }}>
                <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Id" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="data"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
            </LineChart>
        </div>
    </div>
  )
}

export default RenderData