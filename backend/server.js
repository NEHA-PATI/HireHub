const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDB = require('./config/db');
dotenv.config(); // ✅ loads variables from .env

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB(); // ✅ Connects to MongoDB

// Routes
app.use('/api/resume', require('./routes/resumeRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));


// Server Start
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('🚀 HireHub-AI Backend is Running!');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
