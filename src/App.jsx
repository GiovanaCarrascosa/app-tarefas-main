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
    <div className={styles.container}>
      <Header/>
      <Relogio/>
      <TaskInput addTask={addTask}/>
      {/* <TaskList/> */}

    <div className={styles.listsContainer}>

        <div className={styles.pending}>

            <h2>Tarefas Pendentes</h2>

            {/* componente que irá exibir as tarefas */}
            <tackList

                tasks={tasks.filter(task => !task.completed)}
                toggleTask={toggleTask}

            />

        </div>

        <div className={styles.completed}>

           <h2>Tarefas Concluídas</h2>

           <tackList

              tasks={tasks.filter(task => task.completed)}

              //desativa toggle 
              toggleTask={() => {}}

              //restaura a tarefa 
              deleteTask={restoreTask}

              //desativa edição 
              editTask={() => {}}
              
              //flag para TaskItem
              isCompletedList={true}
            />

        </div>

    </div>

    </div>
  )
}

export default App
