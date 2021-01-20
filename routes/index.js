const router = require('express').Router();
const controller = require('../controllers');

router.post('/', controller.index)

module.exports = router;
