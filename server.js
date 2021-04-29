const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Test 2 !');
});

server.listen(process.env.PORT || 3000);