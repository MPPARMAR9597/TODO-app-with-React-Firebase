import React from 'react';
import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import './Todo.css'
import { db } from './firebase';

function ToDo(props) {
    return (
        <div>
            <List className="todo_list">
                <ListItem>
                    <ListItemAvatar></ListItemAvatar>
                    <ListItemText primary={props.text.todo} secondary="1" />
                </ListItem>
                <Button onClick={event => db.collection('todos').doc(props.text.id).delete()}>Delete ME ?</Button>
            </List>
        </div>
    )
}

export default ToDo
