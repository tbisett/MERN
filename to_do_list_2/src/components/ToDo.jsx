// THE RENDERING OF THE TODO LIST/DELETE BUTTONS/CHECKBOXES
// DESTRUCTURING THE PROPERTIES(PROPS) NEEDED FROM THE APP.JS TO IMPLEMET IN THIS FILE WITHOUT HAVING TO PUT PROPS. BEFORE EVERYTHING
const ToDo = ({handleToDoDelete, handleToggleComplete, item, i}) => {
    const toDoClasses = ["bold", "italics"];
    // MAKING CLASSES TO IMPLEMENT CSS EASIER
    // IF ITEM COMPLETE STATUS = TRUE, PUSH LINE-THROUGH TO TODOCLASSES ARRAY
    if (item.complete) {
        toDoClasses.push("line-through");
    }
    // RETURN RENDER/ACTIONS FOR CHECKBOX AND DELETE, USING THE ITERATOR INDEX OF THE MAPPING TO KEEP TRACK OF EACH TODOLIST ITEM, SO YOU ALWAYS AFFECT THE RIGHT ITEM
    return (
        <div style={{marginTop: "1em"}}>
            <span className={toDoClasses.join(" ")}>{item.text}</span>
            <input onChange={(event) => {
                handleToggleComplete(i);
            }} checked={item.complete} type="checkbox" />
            <button onClick={(event) => {
                handleToDoDelete(i);
            }}
                style={{ marginLeft: "2em" }}
            >Delete</button>
        </div>
    )
}

export default ToDo;