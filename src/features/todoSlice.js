import {createSlice} from '@reduxjs/toolkit';

// A slice is where all the 
// - state
// - actions will be defined
// Previously, multiple files and structures are required to set up redux

const todoSlice = createSlice({
    // Name of the slice
    name:'todos',
    // State managed by the slice
    initialState:{todos:[]},
    // reducers/ actions in our state management 
    reducers: {
        // Add
        //THey define the name without '' (it is a function)
        addTodo: (state, action) => {
            // we modify the state and return the state
            // previously we create a copy using [...] 
            state.todos.push(action.payload)
        },
        // Delete
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(val=> val.id !== action.payload)
        }

        
    }

})