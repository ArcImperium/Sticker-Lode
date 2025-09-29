import React, {useState} from 'react'
import './ToDo.css'

const ToDoArray = [];

function AddToArray(Addition) {
    ToDoArray.push(Addition)
}

function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    function AddToArray() {
        if (input.trim() !== '') {
            setTasks(prev => [...prev, input]);
            setInput('');
        }
    }

    return(
        <>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <input type='text' value={input} onChange={e => setInput(e.target.value)} placeholder='  Task' className='tasktext'/>
                <button onClick={AddToArray} className='taskbutton'>Add</button>
            </div>
            <h2 style={{marginTop: '5px'}}>To Do</h2>
            <ul className='tasklist'>
                {tasks.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default ToDo