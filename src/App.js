import React, { useState, useEffect } from 'react';
import { Button, Input, FormControl, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import { db } from './firebase';
import firebase from 'firebase'

function App() {
  const [todo, SetTodo] = useState([]);
  const [input, SetInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      SetTodo(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, [input]);

  const addToDo = (event) => {
    event.preventDefault();
    SetTodo([...todo, input]);
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    SetInput('');
  }

  return (
    <div className="App">
      <h2>Hello MP</h2>
      <form>
        <FormControl>
          <InputLabel>Write A To-Do</InputLabel>
          <Input value={input} onChange={event => SetInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addToDo} variant="contained" color="primary">Add Todo</Button>
      </form>

      <ul>
        {todo.map(todoData => (
          <Todo text={todoData} />
        ))}
      </ul>
    </div>
  );
}

export default App;
