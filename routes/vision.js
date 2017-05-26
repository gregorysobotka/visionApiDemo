'use strict';

var express = require('express');
var router = express.Router();
var vision = require('@google-cloud/vision');

const routeMethods = [
    {route:'faces', method:'detectFaces'},
    {route:'tags', method:'detectLabels'},
    {route:'text', method:'detectText'},
    {route:'landMarks', method:'detectLandmarks'},
    {route:'logos', method:'detectLogos'},
    {route:'safeSearch', method:'detectSafeSearch'}
];

var visionClient = vision({
    projectId: 'my-project',
    keyFilename: 'keyfile.json'
});

for(var index in routeMethods){

    let current = routeMethods[index];
    let routeWithParam = '/'+current.route+'/:target';
    let methodName = current.method;

    router.get(routeWithParam, function(req, res){

        try {
            visionClient[methodName]('./public/images/'+req.params.target, function(err, response) {
                res.send((err) ? err : response);
            });
        } catch(e){
            res.status(400).send(e);
        }
        
    });

}

module.exports = router;