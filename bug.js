const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This is where the bug is
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});