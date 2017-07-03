/**
 * Created by dude on 7/3/17.
 */
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


module.exports = {mongoose};