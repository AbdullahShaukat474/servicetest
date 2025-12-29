const express = require('express');
const app = express();
const PORT = 3001;

// Simple route
app.get('/app1', (req, res) => {
    res.send('Hello from Service one, This is Deployed by using aws code build');
});

// Health check
app.get('/app1/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

app.listen(PORT, () => {
    console.log(`Service 1 running on port ${PORT}`);
});

