import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware and routes can be added here

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});