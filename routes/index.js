var express = require('express');
var router = express.Router();
var add_word=require('../controller/puzzle_controller')

/* GET home page. */
router.post('/insert',add_word.insert);
router.get('/wordpuzzle',add_word.get_data);

module.exports = router;
