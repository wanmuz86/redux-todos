import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'

const Add = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    
    const addTodoPressed = () => {
      // Call addTodo action using dispatch method from useDispatch
      dispatch(addTodo({id:Date.now(), text}))

    }
  return (
    <div>
        <h2>Add new Todo</h2>
        <div>
            <input type="text" value={text} 
            onChange={(e)=>setText(e.target.value)}/>
            <button onClick={addTodoPressed}>Add To Do</button>
        </div>
    </div>
  )
}

export default Add