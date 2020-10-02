import React from 'react';
import TimeOfDay from './TimeOfDay';
import TodoItem from './TodoItem'; 
import todosData from './todosData'; 


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
        
        return (
            <div className="todo-list">
                <TimeOfDay />
                {todoItems}
            </div>
        )    
    }
}

export default App 