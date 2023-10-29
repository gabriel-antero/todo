import { Trash, CheckCircle, Circle } from 'phosphor-react'
import styles from './Task.module.css'

export function Task({task, onDeleteTask, onCompletedTask}) {
    function handleDeleteTask() {
        onDeleteTask(task.id)
    }

    function handleTaskCompleted() {
        task.isCompleted ? task.isCompleted = false : task.isCompleted = true;
        onCompletedTask(task)
    }

    return (
        <div className={styles.taskContainer}>  
            <div>
                <button className={styles.checkTask} title="Marcar tarefa" onClick={handleTaskCompleted}>
                    { task.isCompleted ? <CheckCircle size={24} color="#5E60CE" weight="fill"/> : <Circle size={24} /> }
                </button>
                { task.isCompleted ? <span className={styles.disabled}>{task.description}</span> : <span>{task.description}</span>  }
            </div>
            <button className={styles.deleteTask} title="Deletar Task" onClick={handleDeleteTask}>
                <Trash size={24} className={styles.trash}/>
            </button>
        </div>
    )
}