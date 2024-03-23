const client = require('./connection.js');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const carebuddyRoute = require('./routes/captain_carebuddy');
const roleRoute = require('./routes/roles.js');
const household_plan = require('./routes/household_plan.js');

app.use(bodyParser.json());
app.use('/carebuddy',carebuddyRoute)
app.use('/roles',roleRoute)
app.use('/household_plan',household_plan)

app.listen(5000, () => {
    console.log("Server is now listening at port 5000");
});


