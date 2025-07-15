// server.js
const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');

app.use(express.json()); // to parse JSON bodies
app.use('/api/users', usersRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
