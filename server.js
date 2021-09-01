const express = require('express');

const path = express();

const path = require('path');

app.use(express.static(__dirname + '/angularapp'));

app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/angularapp/index.html'));
});

console.log('Build Successful');