/**
 * Created by dude on 7/4/17.
 */
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('../server/models/user');

// let id = '595beb53a6617e158f85105b';
let id = '595ab09876952a1167867496';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log(user);
}).catch((e) => {
  console.log(e);
});

// if (!ObjectID.isValid(id)) {
//   return console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id: ', todo);
// }).catch((e) => console.log(e));