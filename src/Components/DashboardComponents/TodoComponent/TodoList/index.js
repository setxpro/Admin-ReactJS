import React, { useState } from 'react';
import EditTodo from '../EditTodo';
import TodoForm from '../TodoForm';

import * as C from './styles';

function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return 
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.icComplete;
            }

            return todo;
        })

        setTodos(updateTodos);
    }

    const removeTodo = id => {
        let remove = [...todos].filter(t => t.id !== id);
        return setTodos(remove);
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return 
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

  return (
      <C.Container>
          <TodoForm onSubmit={addTodo}/>
          <EditTodo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
      </C.Container>
  );
}

export default TodoList;