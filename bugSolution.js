const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.on('close', () => {
    console.log('Socket closed');
  });

  res.on('error', (err) => {
    console.error('Socket error:', err);
  });

  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});