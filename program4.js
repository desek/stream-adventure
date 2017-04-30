var through = require('through2');

process.stdin.pipe(through(function (chunk, enc, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
})).pipe(process.stdout);

// temp