const express = require('express');
const app = express();
const PORT = 3001;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Express API' });
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
