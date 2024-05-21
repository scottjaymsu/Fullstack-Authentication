const express = require('express');
const router = express.Router();
const cors = require('cors'); // Import CORS for handling cross-origin requests
const { test, registerUser } = require('../controllers/authController');

// Middleware to enable CORS with specific configurations
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173' // Allow requests from this origin
    })
);

router.get('/', test);
router.post('/register', registerUser);

module.exports = router; // Export router for use when required by another part of the application 