import React from 'react'
import DeleteDataPoint from './DeleteDataPoint'
import EditDataPoint from './EditDataPoint'

const DataList = ({dataArray, setDataArray}) => {
  return (
    <div>
        {dataArray.map((dataObj)=>(
            <div className='dataPoint' key={dataObj.id}>
              <div className='data'>
                <p>{dataObj.data}</p>
              </div>
              <div className='controlButtons'>
                <DeleteDataPoint dataArray={dataArray} setDataArray={setDataArray} id={dataObj.id}/>
                <EditDataPoint dataArray={dataArray} setDataArray={setDataArray} id={dataObj.id}/>
              </div>

            </div>
        ))}
    </div>
  )
}

export default DataList