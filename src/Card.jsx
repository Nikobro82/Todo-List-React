import {motion, AnimatePresence} from "framer-motion"
import {Link} from "react-router-dom"
import {useState} from 'react'

function Card(props) {
    const table = props.table

    const [visible, setVisible] = useState(true)

    const deleteCard = () => {
        setVisible(false)
        // delete code here
        props.onRemove(table.id)
    }
    return(
        <>
         {visible ? 
            <motion.div className = "card" 
            initial = {{rotate: "0eg"}} 
            animate = {{rotate: "0deg"}} 
            transition = {{duration: 0.5, type: 'spring'}}
            whileHover = {{scale:1.05, rotate: "2.5deg"}}>
                <button className = "delete-button" onClick={deleteCard}>X</button>
                <h2 className = "card-title">{table.name}</h2>

                <p className = "card-text">{table.desc}</p>
                
            </motion.div>
            
        
        
        : null}
        </>
       
        
    );
}

export default Card;