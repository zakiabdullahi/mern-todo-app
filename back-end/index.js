const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./models/Todo')
const app = express();



app.use(express.json());

app.use(cors(

    {
        origin: ["https://mern-todo-app-silk.vercel.app"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
    }
));


mongoose.connect("mongodb+srv://Zaki1234:Zaki1234@cluster0.1yegjdw.mongodb.net/mern-app?retryWrites=true&w=majority")

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/add', (req, res) => {

    let task = req.body.task;
    TodoModel.create({
        task: task
    })
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })

})

app.get('/get', (req, res) => {

    TodoModel.find()
        .then(result => {
            res.json(result)
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })

})

app.put('/edit/:id', (req, res) => {
    const { id } = req.params;
    // console.log(id)

    TodoModel.findByIdAndUpdate({ _id: id }, {
        done: true
    })
        .then(result => {

            res.json(result)
        }).catch(err => {
            console.log(err)
        })

})

app.delete('/delete/:id', (req, res) => {

    const { id } = req.params
    TodoModel.findByIdAndDelete({ _id: id })

        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
})

const port = process.env.PORT || 3001


app.listen(port, () => {
    console.log(`Listening on port ${port}`)

})
