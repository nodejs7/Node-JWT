const express = require('express');
const jwt  = require('jsonwebtoken');
const port = 5000;

const app = express();

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API' 
  });
});

app.listen(port, () => console.log('Server started on port 5000'));
