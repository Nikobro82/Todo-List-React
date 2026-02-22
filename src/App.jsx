import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Card from "./Card.jsx"
import {createElement} from 'react'
import { motion } from 'framer-motion'
import CreateTaskFrame from './CreateTask.jsx'

const todoList = {

}

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
    console.log("SET CREATION TO TRUE")
    setCreationVisible(!creationVisible)
  }

  const addTask = (name, desc) => {
    console.log("BUTTON CLICKED")
    setCreationVisible(false)
    const newTask = {
      "name" : name,
      "desc" : desc
    }
    setTasks([...tasks, newTask])
  }

  return (
    <>
      <div className = "todo-list-container">
        <h1>Niko's Todo List!</h1>
        <hr></hr>

        <div className = "main-container">
          <h1>Board</h1>
          <hr></hr>
          <br></br>
          {tasks.map(task => (
            <Card table = {task} key = {task.name}></Card>
          ))}
        </div>
        <div className = "sideBar">
          <motion.button whileHover = {{scale: 1.05}} className = "side-button" onClick = {createTask}>Create</motion.button>
        </div>
      </div>
      <CreateTaskFrame visible = {creationVisible} onCreate = {addTask}></CreateTaskFrame>
    </>
    
  );
}

export default App
