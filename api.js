const client = require('./connection.js');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const carebuddyRoute = require('./routes/captain_carebuddy');

app.use(bodyParser.json());
app.use('/carebuddy',carebuddyRoute)
app.listen(5000, () => {
    console.log("Server is now listening at port 5000");
});


