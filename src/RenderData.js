import React from 'react'
import DeleteDataPoint from './DeleteDataPoint'
import EditDataPoint from './EditDataPoint'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const RenderData = ({dataArray, setDataArray}) => {
    
  return (
    <div>
        <div>
            {dataArray.map((dataObj)=>(
                <div key={dataObj.id}>
                    <p>{dataObj.data}</p>
                    <DeleteDataPoint dataArray={dataArray} setDataArray={setDataArray} id={dataObj.id}/>
                    <EditDataPoint dataArray={dataArray} setDataArray={setDataArray} id={dataObj.id}/>
                </div>
            ))}
        </div>
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