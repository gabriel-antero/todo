import { useState } from 'react'
import { Clipboard, PlusCircle } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid';
import { Task } from './components/Task'
import { Header } from './components/Header';
import styles from './App.module.css'
import './App.css'
import LogoTodo from './assets/Logo.svg';

export function App() {

  const [taskInput, setUseTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  let quantity = 0;

  const task = {
    id: uuidv4(),
    description: taskInput,
    isCompleted: false,
  }

  function handleInputTask(event) {
    setUseTaskInput(event.target.value);
  }

  function handleOnSubmitInput(event) {
    event.preventDefault()

    setTasks([...tasks, task])
    setUseTaskInput("");
  }

  function completeTask(taskToComplete) {
    const taskCompleted = tasks.map((task, index) => {
      if(task.id !== taskToComplete.id){
        return task
      } else {
        return task[index] = taskToComplete
      }

    })
    setTasks(taskCompleted)
  }

  function deleteTask(taskToDelete) {
    const taskDeleted = tasks.filter(taskOnDelete => {
      return taskOnDelete.id !== taskToDelete
    })

    setTasks(taskDeleted);
  }

  function verifyQuantityCompleted() {

    tasks.map(task => {
      if(task.isCompleted){
        quantity++;
      }
    })

    return quantity;
  }
  

  return (
    <div>
      <header >
        <div className={styles.logo}>
            <img src={LogoTodo} alt="Logo Todo" />
        </div>
        <div >
            <form onSubmit={handleOnSubmitInput} className={styles.formsInput}>
                <input placeholder='Adicione uma nova tarefa' onChange={handleInputTask} value={taskInput}></input>
                <button type="submit">Criar <PlusCircle size={16} /> </button>   
            </form>
        </div>
      </header>

      <div className={styles.wrapper}>
        <div className={styles.headerOfTask}>
          <span className={styles.createdTaskOfHeader}>Tarefas criadas</span>
          <span className={styles.quantityTask}>{tasks.length}</span>
        </div>
        <div className={styles.headerOfTask}>
          <span className={styles.concludedTaskOfHeader}>Concluídas</span>
          <span className={styles.quantityTask}>{verifyQuantityCompleted()}</span>
        </div>
      </div>

      <div className={styles.taskContainer}>

      {
        tasks.length ? 
        tasks.map(task => {

          return (
            <Task key={task.id} task={task} onDeleteTask={deleteTask} onCompletedTask={completeTask}/>
          )
        }) :
        <div className={styles.emptyTasks}>
            <Clipboard size={56} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
      }
      </div>
      
    </div>
  )
}

