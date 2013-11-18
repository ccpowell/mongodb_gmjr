/**
 * Created by chris_000 on 11/9/13.
 */

var fs = require('fs'),
    http = require('http'),
    mapUrl = 'http://maps.googleapis.com/maps/api/staticmap?size=100x100&sensor=false&maptype=roadmap&' +
        //'markers=color:blue%7Clabel:S%7C40.702147,-74.015794&' +
        //'markers=color:green%7Clabel:G%7C40.711614,-74.012318&' +
        //'markers=color:red%7Ccolor:red%7Clabel:C%7C40.718217,-73.998284'
        //+
        //'&' +
        /*
        ('path=color:0xFF0000FF|weight:5|fillcolor:0xFFFF0033|' +
            '40.702147,-74.015794|' +
            '40.711614,-74.012318|' +
            '40.718217,-73.998284|' +
            '40.702147,-74.015794')
            */
        ('path=color:0xFF0000FF|weight:1|fillcolor:0xFFFF0033|' +
            '40.0,-75.0|' +
            '20.0, -75.0|' +
            '20.0, -105.0|' +
            '40.0, -105.0|' +
            '40.0, -75.0')
    ;

console.log(mapUrl);
var pic = fs.createWriteStream('test_map.png');
http.get(mapUrl, function (res) {
    console.log(res.statusCode);

    res.on('data', function (chunk) {
        console.log(chunk.length);
        pic.write(chunk);
    });
})
    .on('error', function (e) {
        console.log("Got error: " + e.message);
    });