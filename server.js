// require('dotenv').config({ path: './config.env' });
require('dotenv').config();

const express = require('express');
const path    = require('path');
const app     = express();
// const port    = 3000;
const port = process.env.PORT || 4242;


// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'my-react-app/build')));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'my-react-app/build', 'index.html'));
});

// Handle other routes and return the React app's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'my-react-app/build', 'index.html'));
});

// Define a route for /about
// app.get('/api/about', (req, res) => {
//   res.send('About Page');
// });

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});