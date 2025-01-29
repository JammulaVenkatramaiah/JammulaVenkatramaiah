const express = require('express');
const registerRouter = require('./routes/register'); // Assuming the router is in routes/register.js

const app = express();
app.use(express.json()); // Parse JSON request bodies

app.use('/api', registerRouter); // Mount the router at the /api path

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
