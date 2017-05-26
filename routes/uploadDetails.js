var express = require('express');
var router = express.Router();

router.get('/:imageId', function(req, res){
    var imageId = req.params.imageId;
    res.render('details', {imageId:imageId});
});

module.exports = router;

