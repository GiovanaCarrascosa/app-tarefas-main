import { useState, useEffect } from "react";
import Header from "./components/Header/index"
import Relogio from "./components/Clock/index"
import TaskInput from "./components/TaskInput/index"
import TaskList from "./components/TaskList/index"
import styles from "./App.module.css";

function App() {

  // local storage
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks")
    return saved ? JSON.parse(saved) : []
  })

  // adicionar tarefa
  const addTask = (task) => {
    setTasks([...tasks, {id: Date.now(),
      text: task, completed: false
    }])
  }

  // editar tarefa
  const editTask = (id, newText) => {
    setTasks(
        tasks.map ((task) => 
        task.id === id ? { ...task, text: newText } : task
      )
    )
  }

  // concluir tarefa
  const toggleTask = (id) => {
    setTasks(
        tasks.map ((task) => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  // deletar tarefa
  const deleteTask = (id) => {

    setTasks(tasks.filter((task) => task.id !== id)
      
    )
  }

  // restaurar tarefa
  const restoreTask = (id) => {

    setTasks(
      tasks.map((task) => 
        task.id === id ? {... task, completed: false } : task ))

  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  return (
    <div>
      <Header/>
      <Relogio/>
      <TaskInput addTask={addTask}/>
      {/* <TaskList/> */}

    <div className={styles.listsContainer}>

      
    </div>
    </div>
  )
}

export default App
