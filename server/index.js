const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')

const app = express() /* Initialize Express */

const port = 8000; /* Create port to listen */
app.listen(port, () => console.log(`Server is running on port ${port}`))