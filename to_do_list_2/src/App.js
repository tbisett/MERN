import React, {useState} from "react";
import './App.css';
import ToDo from "./components/ToDo";

function App() {
  // USE STATES 
  const [newToDo, setNewToDo] = useState("");
  const [todos, setToDos] = useState([]);
  
  // SUBMIT TASK FUNCTION
  // IF THE NEW TO TO LENGTH IS LESS THAN 0 CHARS, RETURN SO YOU DONT SUBMIT AN EMPTY OBJECT
  // MAKE A TO DO OBJECT THAT CONTAINS A TEXT AND COMPLETE KEY:VALUE PAIR
  // setToDos(spread the original array to keep values but add the new todoitem)
  const handleNewToDoSubmit = (event) => {
    event.preventDefault();
    if(newToDo.length === 0) {
      return;
    }

    const toDoItem = {
      text: newToDo,
      complete: false
    }
    // set todos and pass in a brand new array contaaining all current todos + a new one
    setToDos([...todos, toDoItem]);
    event.target[0].value = "";
  }

  // MAKE A VAR THAT HOLDS A FILTERED VERSION OF THE TODO ARRAY
  // FILTER THROUGH THE ARRAY AND RETURN THE INDEX(I) IF IT DOESNT EQUAL THE INDEX (IDX) OF THE CLICKED BUTTON
  // THEN SETTODOS TO FILTEREDTODOS
  const handleToDoDelete = (idx) => {
    const filteredToDos = todos.filter((item, i) => {
      return i !== idx;
    })

    setToDos(filteredToDos);
  }

  // TOGGLE FUNCTION FOR THE CHECKBOX, IF THE BOX IS SELECTED, CHANGE THE STATUS OF THE INDEX ITEM TO BE THE OPPOSITE OF ITS CURRENT STATUS, IN THIS CASE, ALTERING BETWEEN TRUE AND FALSE
  // RETURN ITEM AND UPDATE THE LIST
  const handleToggleComplete = (idx) => {
    const updatedList = todos.map((item, i) => {
      // IF TO DO LIST INDEX (I) EQUALS THE SELECTED(IDX) MAKE THE CURRENT COMPLETE STATUS THE OPPOSITE OF WHAT IT CURRENTLY IS (FALSE TO TRUE AND VICE VERSA)
      if(idx === i) {
        item.complete = !item.complete;
        // BELOW IS HOW YOU WOULD DO THIS WITHOUT DIRECTLY MUTATING STATE
        // const updatedList = {...todos, complete: !todos.complete};
        // return updatedList;
      }
      return item;
    })

    setToDos(updatedList);
  }

  // RETURN THAT RENDERS AND DISPLAYS THE FORM
  return (
    <div className="App">
      <form onSubmit={(event) => {
        handleNewToDoSubmit(event);
      }}>
        <input onChange={(event) => {
          setNewToDo(event.target.value);
        }} type="text" value={newToDo} placeholder = "type here" />
        <div>
          <button style={{marginTop: "1em"}}>Add Task</button>
        </div>
      </form>
      {/* THE ITERATING/MAPPING OF THE TODO ARRAY */}
      {/* PASSING THE TODO.JSX TO RENDER AND INPUTTING ALL OF THE FUNCTIONS FROM APP.JS TO BE ABLE TO USE IN TODO.JSX */}
      <fieldset style={{marginTop: "2em"}}>
        <legend>To Do List</legend>
      
      {todos.map((item, i) => {
        return (
          <ToDo key={i} 
            item={item} 
            handleToggleComplete={handleToggleComplete} 
            i={i}
            handleToDoDelete={handleToDoDelete}
          />
        )
      })}
      </fieldset>
    </div>
  );
}

export default App;
        

