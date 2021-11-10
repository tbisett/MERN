import React, {useState} from 'react';

const ToDoListForm = (props) => {
    const [toDoTask, setToDoTask] = useState();
    const [isComplete, setIsComplete] = useState(false);
    const [taskerror, setTaskError] = useState();

    const createTask = (event) => {
        event.preventDefault();
        const newTask = {toDoTask, completed:false};
        props.addTask(newTask);
        console.log("new task created");
        event.target[0].value = "";
    }

    const taskError = (event) => {
        setToDoTask(event);
        if(event.length < 1) {
            setTaskError()
        } else if (event.length < 2) {
            setTaskError("must be longer than two characters")
        } else {
            setTaskError(<p style={{color: "green"}}>Valid</p>)
        }
    }

    const isCompleted = (index) => {
        setIsComplete(index);
        const allTaskCopy = [...props.allTasks]
        allTaskCopy[index].complete = !allTaskCopy.complete
        props.setAllTasks(allTaskCopy);
    }



    const deleteTask = (index) => {
        const listCopy = [...props.allTasks];
        const updatedList = listCopy.filter((task, idx) => idx !== index)
        props.setAllTasks(updatedList);
    }

    return (
    <>
        <br />
                <form onSubmit={createTask}>
                    <div>
                        <label>Task: </label>
                        <input type="text" onChange={(event) => taskError(event.target.value)} placeholder="Task Here"/> <br />
                        {taskError ? <span style={{ color: "red" }}>{taskerror}</span> : <span>&nbsp;</span>}
                    </div>
                    <input type="submit" value="Add Task"/>
                </form>

    </>

    );


};


export default ToDoListForm;

