const { log } = require('console');
const http = require('http');
const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Welcome to my server buddy')
    } else if (req.url === '/about') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Welcome to my server-about page')
    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain')
        res.end('404 NOT FOUND:(')
    }

})

server.listen(port,hostName,()=>{
    console.log(`Server is listening at http://${hostName}:${port}`)
})
