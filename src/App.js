import './index.css';
import RenderData from './RenderData'
import {useState} from 'react'
import AddDataPoint from './AddDataPoint'


function App() {
  const [dataArray, setDataArray] =  useState([
    {id: 1, data: 1},
    {id: 2, data: 6}
  ])
  return (
    <div className="App">
      <RenderData dataArray={dataArray} setDataArray={setDataArray}/>
      <AddDataPoint setDataArray={setDataArray} dataArray={dataArray}/>
    </div>
  );
}

export default App;
