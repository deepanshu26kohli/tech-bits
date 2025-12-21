const http = require('http');

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/test',
    method: 'HEAD'
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.end();
