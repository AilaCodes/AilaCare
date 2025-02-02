const express = require('express');
const connectDB = require('./config/db');
const healthRoutes = require('./routes/healthRoutes');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/health', healthRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});