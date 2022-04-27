import React, { useState } from 'react';
import TodoForm from '../TodoForm';

import { Container, Content, AreaIcons, CloseIcon, EditIcon } from './styles';

function EditTodo({todos, completeTodo, removeTodo, updateTodo}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdateTodo = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return  <TodoForm edit={edit.id} onSubmit={submitUpdateTodo}/>
    }

  return todos.map((todo, index) => (
      <Container className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
          <Content key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
          </Content>
          <AreaIcons>
            <CloseIcon onClick={() => removeTodo(todo.id)}/>
            <EditIcon onClick={() => setEdit({id: todo.id, value: todo.text})}/>
          </AreaIcons>
      </Container>
  ));
}

export default EditTodo;