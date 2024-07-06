import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoSlice'

const Row = ({todo}) => {
  const dispatch = useDispatch()
  return (
    <div>
        <h3>Item name</h3>
        <button onClick={()=> dispatch(removeTodo({id:todo.id}))}>Remove</button>
    </div>
  )
}

export default Row