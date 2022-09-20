import React from 'react'

const DeleteDataPoint = ({id, setDataArray, dataArray}) => {

    const deleteData = (id) =>{
        setDataArray(dataArray.filter(el => el.id !== id))
    }
  return (
    <div>
        <button onClick={()=>deleteData(id)}>Delete</button>
    </div>
  )
}

export default DeleteDataPoint