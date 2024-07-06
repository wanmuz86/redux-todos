import React from 'react'
import Row from './row'

import { useSelector } from 'react-redux'

const List = () => {
  // the first todos is the slice name
  // the second todos is the state (todos)
  const todos =  useSelector((state)=> state.todos.todos)
  return (
    <div>
        <h2>To do List</h2>
        <ul>
            {
              todos.map(val=>(
                <li key={val.id}>
                  <Row todo={val}/>
                </li>
              )
              )
            }
        </ul>
    </div>
  )
}

export default List