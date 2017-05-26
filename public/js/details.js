
var searchMappings = [
    'safeSearch',
    'tags',
    'text',
    'landmarks',
    'logos',
    'faces'
];

searchMappings.map(function(attr){
    $.get('/vision/'+attr+'/'+imageId,function(response){
        $('#'+attr).append(JSON.stringify(response));
    });
});