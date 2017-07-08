/**
 * Created by dude on 7/8/17.
 */
const jwt = require('jsonwebtoken');

let data = {
  id: 10
};

let token = jwt.sign(data, '123abc');

console.log(token);

let decoded = jwt.decode(token, '123abc')

console.log(decoded);