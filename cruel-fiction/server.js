const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint — serves data.json to the frontend
app.get('/api/data', (req, res) => {
  const dataPath = path.join(__dirname, 'data.json');
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading data.json:', err);
      return res.status(500).json({ error: 'Could not load site data.' });
    }
    try {
      const parsed = JSON.parse(data);
      res.json(parsed);
    } catch (parseErr) {
      console.error('Error parsing data.json:', parseErr);
      res.status(500).json({ error: 'data.json is not valid JSON.' });
    }
  });
});

// Catch-all: serve index.html for any unmatched route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Cruel Fiction server running at http://localhost:${PORT}`);
});
