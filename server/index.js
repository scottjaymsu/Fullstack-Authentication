const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { mongoose } = require('mongoose');
const app = express();

// Database connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Database Connected'))
  .catch((err) => console.log('Database NOT Connected', err));

// Middleware
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Route handler for authentication routes
app.use('/', require('./routes/authRoutes'));

// Start the server and listen on the specified port
const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
