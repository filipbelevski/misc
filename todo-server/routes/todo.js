const express = require('express');
const router = new express.Router();
const Todo = require('../models/todo');
const db = require('../db/db');

const todos = [
    {
        id: 1,
        text: 'Go to store'
    },
    {
        id: 2,
        text: 'Buy some milk'
    }
]

router.get('/todos', (req, res) => {
    res.status(200).send(todos);
});

router.get('/todos/:id', (req, res) => {
    const id = +req.params.id;
    const foundToDo = todos.find(x=> x.id === id);

    if(!foundToDo){
        res.status(200).send({message: `no item found with id ${id}`})
    }
    res.status(200).send(foundToDo);
})

router.post('/todos', async (req, res) => {
    const todo = new Todo(req.body);

    try {
        await todo.save();
        res.status(201).send(todo);
    }
    catch (e) {
        res.status(400).send({message: e.message});
    }

})

router.patch('/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    const filteredTodos = todos.filter(x=> x.id !== id);
    const foundTodo = todos.find(todo => todo.id === id);

    todos.push(foundTodo);
    foundTodo.text = body.text;

    res.status(200).send(filteredTodos);
})

module.exports = router;