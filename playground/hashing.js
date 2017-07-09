/**
 * Created by dude on 7/8/17.
 */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// let data = {
//   id: 10
// };
//
// let token = jwt.sign(data, '123abc');
//
// console.log(token);
//
// let decoded = jwt.decode(token, '123abc')
//
// console.log(decoded);

let password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    // console.log(hash);
  });
});

let hashedPassword = '$2a$10$F4sPrl2oZQKeEQylsytpnOxkF/4PzF96t3zfQd.5Y0aNxugSiOFwi';

bcrypt.compare(password, hashedPassword, (err, result) => {
  console.log(result);
});