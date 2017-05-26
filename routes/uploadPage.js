var express = require('express');
var router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/', function(req, res){
    res.render('upload');
});

module.exports = router;

