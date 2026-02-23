import { tr } from "framer-motion/client";
import { useState, useEffect } from "react";
import {motion} from "framer-motion"

function CreateTaskFrame(props) {
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [priority, setPriority] = useState()
    const [updates, setUpdates] = useState()

    const version = props.version || "VERSION NOT FOUND"

    const updatesList = [
        {
            "Title" : "1.0",
            "Description" : "First update! Created the todo-list with cards."
        },
        {
            "Title" : "2.0",
            "Description" : "Small redesign! Added proper centering, cards fill by row left to right, fixed div dimensions and css."
        },
        {
            "Title" : "3.0",
            "Description" : "Added priority! Access low, medium, or high priority for your tasks and have them sorted."
        }
    ]

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

    useEffect(() => {
        setUpdates(updatesList)
    }, [])

    return (
        <>
            {(props.visible) ? 
            <motion.div className = "create-task-frame"
            initial = {{scale: 0}}
            animate = {{scale: 1}}
            transition = {{duration: 0.25}}
            >
                <h1>Update Log</h1>
                <h3>Current Version: {version}</h3>
                <hr></hr>
                {updates.map((table) => (
                    <>
                        <p className = "update-text">{table.Title}: {table.Description}</p>
                    </>
                ))}

            </motion.div>
        : null}
        </>
    

    );
}

export default CreateTaskFrame