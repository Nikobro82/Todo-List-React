import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Card from "./Card.jsx"
import {createElement} from 'react'
import { motion } from 'framer-motion'
import CreateTaskFrame from './CreateTask.jsx'


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
      </Routes>

    </HashRouter>
  )
}

function Home() {

  const [tasks, setTasks] = useState([])
  const [creationVisible, setCreationVisible] = useState(false)

  const createTask = () => {
    setCreationVisible(!creationVisible)
  }

  const addTask = (name, desc, priority) => {
    setCreationVisible(false)
    priority = priority || 0
    const newTask = {
      "name" : name,
      "desc" : desc,
      "id" : crypto.randomUUID(),
      "Priority" : priority
    }
    setTasks([...tasks, newTask].sort((b,a) => a.Priority - b.Priority))
  }

  const removeTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }



  const sortTasks = (task_data_table) => {
     task_data_table.forEach((table) => {
        if (!table.Priority) {
          table.Priority = 0
        }
      })
      // sorts array to highest to lowest by priority
      task_data_table.sort((b,a) => a.Priority - b.Priority)
      return task_data_table
  }

  useEffect (() => {
    const tasks_data = window.localStorage.getItem("TASKS_DATA");

    if (tasks_data) {
      const task_data_table = JSON.parse(tasks_data)
      const sorted_table = sortTasks(task_data_table)
      setTasks(sorted_table)
    } else {
      setTasks([])
    }
    
  }, [])

  useEffect (() => { // runs when tasks is updated
    console.log("task modified")
    window.localStorage.setItem("TASKS_DATA", JSON.stringify(tasks))
  }, [tasks])


  return (
    <>
      <h1 className = "header">Niko's Todo List!</h1>
      <hr></hr>
      <div className = "todo-list-container">
        <div className = "sideBar">
          <motion.button whileHover = {{scale: 1.05}} className = "side-button" onClick = {createTask}>Create Task</motion.button>
        </div>
        <div className = "main-container">
          <h1>Board</h1>
          <hr></hr>
          <div className = "card-container">
            {tasks.map(task => (
              <Card table = {task} key = {task.id} onRemove = {removeTask} id = {task.id} priority = {task.Priority}></Card>
            ))}
          </div>
          
        </div>
      </div>
      <CreateTaskFrame visible = {creationVisible} onCreate = {addTask}></CreateTaskFrame>
    </>
    
  );
}

export default App
