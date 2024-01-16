import React,{useState} from 'react';
import Multiselect from 'multiselect-react-dropdown';
import './App.css';

function App() {
  
  const data =[
    {
      id:1,
      state:"Mumbai",
    },
    {
      id:2,
      state:"Lucknow",
    },
    {
      id:3,
      state:"Delhi",
    },
    {
      id:4,
      state:"Bangalore",
    },
    {
      id:5,
      state:"Indore",
    },
    {
      id:6,
      state:"Navi Mumbai",
    },
    {
      id:7,
      state:"Pune",
    },
    {
      id:8,
      state:"Nashik",
    },
    
  ]
  const [options] = useState(data);
  return (
    <div className="App">
      <div className='container'>
        <Multiselect options={options} displayValue='state' className='dropdown' placeholder='SELECT'/>
      </div>
    </div>
  );
}

export default App;
