var express = require('express');
var router = express.Router();

var sensorController = require('../controllers/sensor');

router.get('/', sensorController.getAll)
router.post('/:id', sensorController.getById)
router.post('/', sensorController.add)


/* GET users listing.
router.post('/:id', function(req, res, next) {
  console.log('ID:' + req.params.id);
  console.log('PARAMS:' + JSON.stringify(req.params));
  res.send('respond with a resource');
}); */

module.exports = router;
