import React from 'react';
import { Link } from 'react-router-dom';

import * as C from './styles';
import TodoList from './TodoList';

function TodoComponent() {
  return (
      <C.Container>
          <C.AreaTitle><h3>Todo</h3><Link to='/todo'>View all</Link></C.AreaTitle>
            <TodoList/>
      </C.Container>
  );
}

export default TodoComponent;