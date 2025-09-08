import { useState, useEffect } from "react";
import Header from "./components/Header/index"
import Relogio from "./components/Clock/index"
import TaskInput from "./components/TaskInput/index"
// import TaskList from "./components/TaskList/index"
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

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  return (
    <div>
      <Header/>
      <Relogio/>
      <TaskInput addTask={addTask}/>
      {/* <TaskList/> */}

      <div className={styles.listsContainer}></div>
    </div>
  )
}

export default App
