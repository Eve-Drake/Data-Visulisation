import React from 'react'
import DeleteDataPoint from './DeleteDataPoint'
import EditDataPoint from './EditDataPoint'

const DataList = ({dataArray, setDataArray}) => {
  return (
    <div>
        {dataArray.map((dataObj)=>(
            <div className='dataPoints' key={dataObj.id}>
                <p>{dataObj.data}</p>
                <DeleteDataPoint dataArray={dataArray} setDataArray={setDataArray} id={dataObj.id}/>
                <EditDataPoint dataArray={dataArray} setDataArray={setDataArray} id={dataObj.id}/>
            </div>
        ))}
    </div>
  )
}

export default DataList