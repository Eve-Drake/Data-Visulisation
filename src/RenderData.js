import React from 'react'
import DeleteDataPoint from './DeleteDataPoint'
import EditDataPoint from './EditDataPoint'

const RenderData = ({dataArray, setDataArray}) => {
  return (
    <div>
        <div>
            {dataArray.map((data)=>(
                <div key={data.id}>
                    <p>{data.data}</p>
                    <DeleteDataPoint dataArray={dataArray} setDataArray={setDataArray} id={data.id}/>
                    <EditDataPoint dataArray={dataArray} setDataArray={setDataArray} id={data.id}/>
                </div>
            ))}
        </div>
        <div>

        </div>
    </div>
  )
}

export default RenderData