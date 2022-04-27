import React, { useState, useEffect, useRef } from 'react';

import * as C from './styles';

function TodoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus()
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    }

  return (
      <C.Container onSubmit={handleSubmit}>

        {props.edit ? (
          <>
            <input 
              type="text" 
              placeholder='Update todo..' 
              value={input} 
              onChange={e => setInput(e.target.value)}
              ref={inputRef}
            />
            <button>Update</button>
          </>
        ) : (
          <>
            <input 
            type="text" 
            placeholder='Add a todo..' 
            value={input} 
            onChange={e => setInput(e.target.value)}
            ref={inputRef}
          />
            <button>Add</button>
          </>
        )}

        
      </C.Container>
  );
}

export default TodoForm;