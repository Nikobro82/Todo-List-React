import { tr } from "framer-motion/client";
import { useState } from "react";

function CreateTaskFrame(props) {
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")


    const createTask = () => {
        props.onCreate(name, desc)
    }

    return (
        <>
            {(props.visible) ? 
            <div className = "create-task-frame">
                <h1>CREATE TASK</h1>
                <p>Title</p>
                <input onChange={(text) => setName(text.target.value)} className = "titleText" type = "text"></input>
                <p>Description</p>
                <input onChange={(text) => setDesc(text.target.value)} className = "descText" type = "text"></input>
                <br></br>
                <hr></hr>
                <br></br>
                <button onClick = {createTask}>Create Task</button>
            </div>
        : null}
        </>
    

    );
}

export default CreateTaskFrame