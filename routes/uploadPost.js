var express = require('express');
var router = express.Router();
const multer  = require('multer');
const fs = require("fs");
const crypto = require('crypto');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+'.'+file.mimetype.replace('image/',''));
    }
});

const upload = multer({ storage : storage }).any();

router.post('/', function(req, res){
    upload(req,res,function(err) {
        if(err) {throw err;}
        var image = req.files[0];
        req.files[0].url = 'details/'+image.filename;
        res.json({'files' : req.files });
        res.status(204).end();
    });
});

module.exports = router;

