import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const AddDataPoint = ({dataArray, setDataArray}) => {
    const [dataPoint, setDataPoint] =  useState(0)
    const addNewDataPoint = (e) =>{
        e.preventDefault()
        setDataArray([...dataArray, {id: nanoid(), data:dataPoint}])
        setDataPoint(0)
    }


  return (
    <div>
        <form onSubmit={addNewDataPoint}>
            <input 
            type='number'
            placeholder='Add Data'
            value={dataPoint}
            onChange={(e)=>setDataPoint(e.target.value)}
            />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddDataPoint