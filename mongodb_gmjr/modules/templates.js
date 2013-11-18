/**
 * Created by chris_000 on 11/9/13.
 */
var fs = require('fs'),
    _ = require('underscore'),
    templateControlFile,
    textControlFile;

// synchronous initialization
function readAndCompile(path) {
    var text = fs.readFileSync(path, {encoding: 'utf8'});
    return _.template(text);
}

exports.controlFile = readAndCompile('./templates/control.tmpl');


