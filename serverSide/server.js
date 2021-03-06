// Require needed modules and initialize Express app
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

require('./configs/database');

// Set cors and bodyParser middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const userController = require('./controllers/userController');
app.use('/api/users', userController);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/api/users`));