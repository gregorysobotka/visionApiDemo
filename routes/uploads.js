var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', function(req, res){
    var path = './public/images';
    var arrayImages = [];
    fs.readdir(path, function (err, files) {
        if (err) {throw new Error(err);}
        files.forEach(function (name) {
           arrayImages.push(name);
        });
        res.render('displayAll',{links:arrayImages})
    });
});

router.delete('/:imageId', function(req, res){
    var removeID = req.params.imageId;
    fs.unlink('./public/images/'+removeID, (err) => {
        if (err) throw err;
        res.json({imageRemoved:true})
    });
});

module.exports = router;

