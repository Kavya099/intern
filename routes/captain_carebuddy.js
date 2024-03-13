const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const carrybuddycontroller = require('../controllers/captain_carebuddyController'); //for coming out of folder use ../

router.use(bodyParser.json());

// Routes with controller functions
router.get('/all', carrybuddycontroller.getAllUsers);
router.post('/insert', carrybuddycontroller.insertUser);
router.put('/update', carrybuddycontroller.updateUser);
router.delete('/delete', carrybuddycontroller.deleteUser);

module.exports = router;
