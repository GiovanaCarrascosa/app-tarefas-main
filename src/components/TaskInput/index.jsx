import styles from "./TaskInput.module.css"
import { useState } from "react"

function TaskInput({addTask}) {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value.trim()) return
        addTask(value)
        setValue("")
    }

    return (
        <div className={styles.containerGeral}>
            <form className= {styles.form} onSubmit={handleSubmit}>
                <input 
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Digite sua tarefa..."
                className={styles.input} 
                />
                <button type="submit" className={styles.button}>Adicionar</button>
            </form>
        </div>
    )
  }

export default TaskInput;