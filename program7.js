var http = require('http');
var through = require('through2')

var port = process.argv[2];

var server = http.createServer(function (req,res)
{
    if (req.method === 'POST')
    {
        req.pipe(through(function (chuck, enc, callback) {
           this.push(chuck.toString().toUpperCase());
           callback();
        })).pipe(res);
    }
    else
    {
        res.end('beep boop');
    }
}).listen(port);