import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts";

const RenderData = ({dataArray}) => {
  const data = dataArray //Helps Rechart keep track of data -- prevents boundry errors on graph
  return (
    <div>
        <div>
              <LineChart
                  width={400}
                  height={400}
                  data={data}
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