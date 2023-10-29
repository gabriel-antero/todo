import { useState } from 'react';
import LogoTodo from '../assets/Logo.svg';
import styles from './Header.module.css'
import { PlusCircle } from 'phosphor-react'

export function Header() {
    const [task, setUseTask] = useState();

    function handleInputTask(event) {
        setUseTask(event.target.value);
    }

    return (
        <header >
            <div className={styles.logo}>
                <img src={LogoTodo} alt="Logo Todo" />
            </div>
            <div >
                <form className={styles.formsInput}>
                    <input placeholder='Adicione uma nova tarefa' onChange={handleInputTask}></input>
                    <button type="submit">Criar <PlusCircle size={16} /> </button>   
                </form>
            </div>
        </header>
    )
}