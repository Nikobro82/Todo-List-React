import { tr } from "framer-motion/client";
import { useState } from "react";
import {motion} from "framer-motion"

function CreateTaskFrame(props) {
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [priority, setPriority] = useState()


    const createTask = () => {
        if (name && desc) {
            props.onCreate(name, desc, priority)
            setName()
            setDesc()
            setPriority()
        }
        
    }

    const updatePriority = (value) => {
        setPriority(value)
        console.log(`PRIORITY: ${value}`)
    }

    return (
        <>
            {(props.visible) ? 
            <motion.div className = "create-task-frame"
            initial = {{scale: 0}}
            animate = {{scale: 1}}
            transition = {{duration: 0.35}}
            >
                <h1>Create Task</h1>
                <hr></hr>
                <p>Title</p>
                <input onChange={(text) => setName(text.target.value)} className = "titleText" type = "text"></input>
                <p>Description</p>
                <input onChange={(text) => setDesc(text.target.value)} className = "descText" type = "text"></input>
                <p>Priority</p>
                <select onChange = {(value) => updatePriority(value.target.value)}>
                    <option value = {null}>None</option>
                    <option value = {0}>Low</option>
                    <option value = {1}>Medium</option>
                    <option value = {2}>High</option>
                </select>
                <br></br>
                <hr></hr>
                <br></br>
                <motion.button className = "create-task-button"  whileHover = {{scale: 1.05}} onClick = {createTask}>Create</motion.button>
            </motion.div>
        : null}
        </>
    

    );
}

export default CreateTaskFrame