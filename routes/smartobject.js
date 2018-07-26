var express = require('express');
var router = express.Router();

var smartobjectController = require('../controllers/smartobject');

router.get('/', smartobjectController.getAll)
router.post('/:id', smartobjectController.getById)
router.post('/', smartobjectController.add)


/* GET users listing.
router.post('/:id', function(req, res, next) {
  console.log('ID:' + req.params.id);
  console.log('PARAMS:' + JSON.stringify(req.params));
  res.send('respond with a resource');
}); */

module.exports = router;
