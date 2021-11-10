import React, {useState} from 'react';
import './App.css';
import BoxForm from './components/Form';
import Display from './components/Display';

function App() {
  const [allBoxes, setAllBoxes] = useState([
    {
      boxColor: "blue",
      boxDimesion: "50px"
    }
  ])

  const addColorBox = (newBoxObj) => {
    const newBoxList = [...allBoxes];
    newBoxList.push(newBoxObj);
    setAllBoxes(newBoxList);
  }
  
  return (
    <div className="App">
      <BoxForm addColorBox={addColorBox}/>
      <Display allBoxes ={allBoxes}/>
    </div>

    
  );
}

export default App;
