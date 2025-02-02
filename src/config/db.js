const express = require('express');
const connectDB = require('./config/db');
const healthRoutes = require('./routes/healthRoutes');
const statusRoutes = require('./routes/statusRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/health', healthRoutes);
app.use('/api', statusRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});