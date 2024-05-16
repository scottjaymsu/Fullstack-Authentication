const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');


// Initialize Express application
const app = express() 

// Route handler for authentication routes
app.use('/', require('./routes/authRoutes'));

// Create port to listen on
const port = 8000; 

// Start the server and listen on the specified port
app.listen(port, () => console.log(`Server is running on port ${port}`));