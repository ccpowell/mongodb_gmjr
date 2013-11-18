/**
 * Created by chris_000 on 11/9/13.
 */
var fs = require('fs'),
    Q = require('q');

exports.writeFile = function(path, text){
  fs.writeFile(path, text);
};
