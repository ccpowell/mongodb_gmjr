var fs = require('fs'),
    _ = require('underscore'),
    text,
    lines,
    first,
    second;

text = fs.readFileSync('x.txt', {encoding: 'utf8'});
// multi-line search, don't bother splitting
var reFirst = /^\s*first line\s+(\d+)/m,
    reSecond = /^\s*second\s+(\d+)/m;

first = reFirst.exec(text)[1];
second = reSecond.exec(text)[1];
console.log(first);
console.log(second);
