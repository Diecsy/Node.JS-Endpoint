const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Data from server' });
});

app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  console.log('Received data:', receivedData);
  res.json({ message: 'Data received', data: receivedData });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
