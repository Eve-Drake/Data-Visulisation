import {useState} from 'react'

const EditDataPoint = ({id, setDataArray, dataArray}) => {
    const [editId, setEditId] = useState(0)
    const [dataEdit, setDataEdit] = useState(0)

    const startEdit = (id) =>{
        setEditId(id)
    }

    const finishEdit = (e) =>{
        e.preventDefault()
        setDataArray(dataArray.map((el)=> {
            if(el.id === editId){
                return {data: dataEdit, id: editId}
            }
            return el
        }))
        setEditId(0)

    }


  return (
    <div>
        <div>
            <button onClick={()=>startEdit(id)}>Edit</button>
        </div>
        <div className={(editId? 'show' : 'hide')}>
            <form onSubmit={finishEdit}>
                <input
                type='number'
                placeholder='Edit Data'
                value={dataEdit}
                onChange={(e)=>setDataEdit(e.target.value)}
                />
                <button type='submit'>Change</button>
            </form>
        </div>
        
    </div>
  )
}

export default EditDataPoint