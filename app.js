const express = require('express');
const jwt  = require('jsonwebtoken');
const port = 5000;

const app = express();

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API' 
  });
});

app.post('/api/posts/', (req, res) => {
  res.json({
    message: 'Post created...' 
  });
})

app.post('/api/login', (req, res) => {
  // Mock user
  const user = {
    id: 1, 
    username: 'brad',
    email: 'brad@gmail.com'
  }
  // same as jwt.sign({user: user}, 'secretkey',  (err, token) => {
  jwt.sign({user}, 'secretkey',  (err, token) => {
    res.json({
      //same as token: token
      token
    })
  });
});

app.listen(port, () => console.log('Server started on port 5000'));
