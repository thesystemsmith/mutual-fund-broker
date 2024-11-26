const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const fundRoutes = require('./routes/fundRoutes');

app.use('/api/users', userRoutes);
app.use('/api/funds', fundRoutes);

module.exports = app;
