const Task = ({ task, deleteTask, toggleTask }) => {
    return (
        <div>
            <span onClick={() => toggleTask(task.id)} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
            </span>

            <button onClick={() => deleteTask(task.id)}>Borrar</button>
        </div>
    )
}

export default Task