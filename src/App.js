import React from 'react';
import TimeOfDay from './TimeOfDay';
import TodoItem from './TodoItem'; 


const App = () => {
 return (  

    <div >
        <TimeOfDay />
        <div className="todo-list"> 
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        </div>
    </div>
 )
}

export default App 