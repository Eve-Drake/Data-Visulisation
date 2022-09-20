import './index.css';
import RenderData from './RenderData'
import {useState} from 'react'
import AddDataPoint from './AddDataPoint'
import DataList from './DataList';


function App() {
  const [dataArray, setDataArray] =  useState([
    {id: 1, data: 1},
    {id: 2, data: 6},
    {id: 3, data: 2}
  ])
  return (
    <div>
      <h1>Data Visulisation with CRUD functionality</h1>
      <div className='container'>
        <div>
          <RenderData dataArray={dataArray} setDataArray={setDataArray}/>
        </div>
        <div className='items'>
          <AddDataPoint setDataArray={setDataArray} dataArray={dataArray}/>
          <DataList dataArray={dataArray} setDataArray={setDataArray}/>
        </div>
      </div>
    </div>
  );
}

export default App;
