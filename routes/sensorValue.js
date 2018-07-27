var express = require('express');
var router = express.Router();

var sensorValueController = require('../controllers/sensorValue');

router.get('/', sensorValueController.getAll)
router.post('/:id', sensorValueController.getValuesBySensorId)
router.post('/', sensorValueController.add)



module.exports = router;