import React, { useState } from "react";
import ToDoListForm from "./ListForm";

const ToDoList = ({allTasks}) => {
    return (

        <div>
            {JSON.stringify(allTasks)}
            <fieldset>
            <legend>To Do List</legend>
            {allTasks.map((task, index) => (<div key={index}>{task.toDoTask}
                        {/*--------------------- LEFT OFF HERE------------------------ */}
                <input type="checkbox" checked={task.isCompleted} onChange={(event) => ToDoListForm.isCompleted(index)} /> <br />
                {task.isCompleted ? <span style={{ textDecorationLine: "line-through" }}>{task.toDoTask}</span> : <span>&nbsp;</span>}
                <span><button onClick={task.isCompleted}>Delete</button></span>
            </div>
            ))}
            {/* ADD SECTION BELOW INTO THE MAPPING ITERATION ABOVE */}
            <div>
                        
                    </div>
            </fieldset>
        </div>
    )
}

export default ToDoList;




