import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware and routes can be added here
app.get('/', (req, res) => {
    res.json({ 
        message: 'Welcome to Zyntra Management Consultants API',
        status: 'Server is running successfully',
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});