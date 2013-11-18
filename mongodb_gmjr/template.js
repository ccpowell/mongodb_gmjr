/**
 * Created by chris_000 on 11/10/13.
 */

var templates = require('./modules/templates'),
    fs = require('fs'),
    canada = {
        version: 'Canada Allish',
        input_path: 'caches.csv',
        output_path: 'canada.bin',
        order: 'closest',
        micro: 2,
        max_difficulty: 4,
        max_terrain: 4,
        min_size: 1,
        time_since_placed: 0,
        time_since_found: 1825,
        areas: [{
            min_latitude: 41,
            max_latitude: 75,
            min_longitude: -141,
            max_longitude: -52
        }]
    };

/*
 # Filter Info (max difficulty [*10], max terrain [*10], min size, time since placed [days], time since found [days])
 # use no spaces between numbers!!  0 for time since placed and time since found is ignore value.
 # max difficulty and max terrain must be evenly divisible by 5 (allowed values 10,15,20,25,30,35,40,45,50)
 */
function makeFinfo(region) {
    return (region.max_difficulty * 10).toFixed(0) + ',' +
        (region.max_terrain * 10).toFixed(0) + ',' +
        (region.min_size).toFixed(0) + ',' +
        (region.time_since_placed).toFixed(0) + ',' +
        (region.time_since_found).toFixed(0);
}

/*
 # Data Block Info (min lat, max lat, min lon, max lon)
 */
function makeDbinfo(region, index){
    var area = region.areas[index];
    return area.min_latitude.toFixed(1) + ',' +
        area.max_latitude.toFixed(1) + ',' +
        area.min_longitude.toFixed(1) + ',' +
        area.max_longitude.toFixed(1);
}

function makeControl(region, index){
    control = {
        version: region.version,
        input_path:  region.input_path,
        output_path:  region.output_path,
        dbinfo: makeDbinfo(region, index),
        order:  region.order,
        finfo: makeFinfo(region, index),
        micro:  (region.micro * 10).toFixed(0)
    };
    return control;
}

console.log(templates.controlFile(makeControl(canada, 0)));