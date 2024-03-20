const express = require('express');
const router = express.Router();
const rolescontroller = require('../controllers/rolesController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/all', rolescontroller.getAllUsers);
router.post('/insert', rolescontroller.insertUser);
router.put('/update',  rolescontroller.updateUser);
router.delete('/delete', rolescontroller.deleteUser);

module.exports = router;
