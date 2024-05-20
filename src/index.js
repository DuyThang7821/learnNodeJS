const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 8080;


app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));  // Sử dụng hàm engine thay vì handlebars()
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

// Define a route
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});
// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
