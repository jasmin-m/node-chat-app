const path = require('path');
const express = require('express');
const fs = require('fs');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;
var app = express();

//Config express static middleware
app.use(express.static(publicPath));

//Bind the app to a port in the machine
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
