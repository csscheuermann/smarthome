var express = require('express');
var router = express.Router();

var smartobjectController = require('../controllers/smartobject');

router.get('/', smartobjectController.getAll)
router.get('/:id', smartobjectController.getById)
router.post('/', smartobjectController.add)

module.exports = router;
