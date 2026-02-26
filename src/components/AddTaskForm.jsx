import { useState } from "react";

const AddTaskForm = ({ addTask }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(input);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Nueva tarea" />
            <button type="submit">Agregar</button>
        </form>
    );
};

export default AddTaskForm;