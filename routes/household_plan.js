const express = require('express');
const router = express.Router();
const household_planscontroller = require('../controllers/household_planController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/all', household_planscontroller.getAllUsers);
router.post('/insert', household_planscontroller.insertUser);
router.put('/update',  household_planscontroller.updateUser);
router.delete('/delete',household_planscontroller.deleteUser);

module.exports = router;