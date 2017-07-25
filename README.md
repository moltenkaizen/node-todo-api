# Node Todo API

####CRUD Todo API (POST, GET, PATCH, DELETE)
* POST /todos
* GET /todos
* GET /todos/:id
* PATCH /todos/:id
* DELETE /todos/:id

####JWT Based Authentication
* POST /users
* GET /users/me
* POST /users/login
* DELETE /users/me/token

#### Install modules
```npm install```

#### Configure
Set your secret key and mongodb URI for test and dev
<pre>
server/config/config.json

{
  "test": {
    "port": 3000,
    "MONGODB_URI": "mongodb://localhost:27017/TodoApp",
    "JWT_SECRET": "your secret key"
  },
  "development": {
    "PORT": 3000,
    "MONGODB_URI": "mongodb://localhost:27017/TodoAppTest",
    "JWT_SECRET": "another secret key"
  }
}
</pre>

#### Run
```npm start```

#### Test
```npm test```