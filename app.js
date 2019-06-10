const express = require('express');
const jwt  = require('jsonwebtoken');
const port = 5000;

const app = express();

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API' 
  });
});

app.post('/api/posts/', verifyToken, (req, res) => {
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

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {

  } else {
    // Forbidden
    res.sendStatus(403);
  }

}

app.listen(port, () => console.log('Server started on port 5000'));
