/**
 * Created by dude on 7/3/17.
 */
const express = require('express');
const bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoogse');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');


let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  let todo = new Todo({
    text: req.body.text
  })
  todo.save().then((doc) => {
    res.status(200).send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});