import React, {useState} from 'react';
import './App.css';
import ToDoListForm from './components/ListForm';
import ToDoList from './components/Display';


function App() {
  const[allTasks, setAllTasks] = useState([
    {
      task: "Finish Assignment",
      completed: false
      
    }
  ])

    // ADD TASK FUNCTION HERE
    const addTask = (newTask) => {
      const taskList = [...allTasks];
      taskList.push(newTask);
      setAllTasks(taskList);
    }

  
  return (
    <div className="App">
      <ToDoListForm addTask={addTask}/>
      <ToDoList allTasks={allTasks}/>
    </div>
  );
}

export default App;
