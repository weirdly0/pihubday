const express = require('express');
const app = express();
const path = require('path');

// Set view engine to EJS and static assets folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for each page

// Welcome screen with glassmorphism box
app.get('/', (req, res) => {
  res.render('index');
});

// Second message screen
app.get('/page2', (req, res) => {
  res.render('page2');
});

// Third screen with two buttons for song dedication prompt
app.get('/page3', (req, res) => {
  res.render('page3');
});

// Balloon pop activity page
app.get('/balloon', (req, res) => {
  res.render('balloon');
});

// Cake ceremony page
app.get('/cake', (req, res) => {
  res.render('cake');
});

// Final page with Spotify song dedication
app.get('/song', (req, res) => {
  res.render('song');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));