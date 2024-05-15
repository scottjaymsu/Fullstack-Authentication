const express = require('express');
const router = express.Router();
const cors = require('cors'); /* Enable web app to make requests to APIs on different domains - Middleware */
const { test } = require('../controllers/authController');

// Middleware

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', test)

module.exports = router /* Export router for use when required by another part of the application */