/**
 * Created by dude on 7/3/17.
 */
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var uri = 'mongodb://localhost:27017/TodoApp';

mongoose.connect(uri, {useMongoClient: true});
module.exports = {mongoose};