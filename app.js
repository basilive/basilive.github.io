const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Add static path
app.use(express.static(path.join(__dirname, './public')));

// Add template engine and folder
app.set('view engine', 'ejs');
app.set('views', 'views/templates');

// Add body-parser
app.use(bodyParser.urlencoded({extended: false}));

// Add routes
const userRoutes = require('./routes/user/userRoutes');

// Use routes
app.use(userRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server listen ${port} port`);
});