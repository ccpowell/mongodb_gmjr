var repository = require('./modules/repository'),
    _ = require('underscore');
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
    areas: [
        {
            min_latitude: 41,
            max_latitude: 75,
            min_longitude: -141,
            max_longitude: -52
        }
    ]
};

repository.createRegion(canada)
    .done();