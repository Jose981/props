import './App.css'
import { useState } from 'react'
import AddTaskForm from './components/AddTaskForm'
import Task from './components/Task'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ])

  // Función para crear una tarea
  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text: text,
      completed: false
    }

    setTasks([...tasks, newTask])
  }

  // Función para eliminar una tarea
  const deleteTask = (taskId) => {
    setTasks(prev => prev.filter(task => task.id !== taskId))
  }

  // Función para marcar/ desmarcar una tarea
  const toggleTask = (taskId) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t))
  }

  return (
    <div>
      <h1>Lista de tareas:</h1>
      <AddTaskForm addTask={addTask} />

      {tasks.map(task => (
        <Task key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} />
      ))}
    </div>
  );
};

export default App;
