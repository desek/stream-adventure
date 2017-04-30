var split = require('split');
var through = require('through2');
var line = 0;

var transform = through(function (chunk,enc,callback) {
    line++;
    if (line%2 === 0)
    {
        this.push(chunk.toString().toUpperCase() + '\n');
    }
    else
    {
        this.push(chunk.toString().toLowerCase() + '\n');
    }
    callback();
});

process.stdin.pipe(split()).pipe(transform).pipe(process.stdout);