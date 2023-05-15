const express = require('express');

const server = express();

server.get('/', function (req, res){
    res.send('<h1>hola mundo</h1>');
    res.end();
});

server.listen(3003, function (){
    console.log('server on');
});

