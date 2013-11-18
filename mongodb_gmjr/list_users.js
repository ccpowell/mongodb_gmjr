var repository = require('./modules/repository'),
    _ = require('underscore');

/*
 repository.getUsers()
 .then(function (users) {
 console.log('got users');
 _.each(users, function (u) {
 console.log(JSON.stringify(u));
 });
 console.log('');
 })
 .done();

 repository.createUser({
 name: 'alpha',
 password: 'alpha',
 geocacheLists: [
 {
 name: 'ralpha',
 geocaches: [
 {
 title: '00001',
 latitude: {
 direction: 'N',
 minutes: 0.0,
 degrees: 0.0
 },
 longitude: {
 direction: 'N',
 minutes: 0.0,
 degrees: 0.0
 },
 size: 1,
 terrain: 1,
 difficulty: 1
 }
 ]
 }
 ]})
 .fail(function (error) {
 console.log(error);
 });

 */
 for (var i = 0; i < 25; i++)
 repository.getUserByName('aaa')
 .then(function (user) {
 console.log(JSON.stringify(user));
 })
 .done();

repository.getUserByName('alpha')
    .then(function (user) {
        console.log("got alpha");
        repository.getUserById(user._id.toString())
            .then(function (byid) {
                console.log("got alpha by id");
                if (byid.name !== user.name) {
                    console.log("???");
                } else {
                    console.log("okay");
                }
            })
            .done();

    })
    .done();

repository.getUserByName('alpha')
    .then(function (user) {
        console.log('got alpha');
        repository.getUserGeocacheLists(user._id.toString())
            .then(function (lists) {
                console.log('got lists')
                console.log(lists || 'could not get lists');
            })
            .done();
    })
    .done();

repository.getUserByName('alpha')
    .then(function (user) {
        console.log('got alpha');
        repository.getUserGeocacheList(user._id.toString(), 'ralpha')
            .then(function (list) {
                console.log(JSON.stringify(list || 'could not get list'));
            })
            .fail(function (error) {
                console.log(error);
            });
    })
    .done();


repository.getUserByName('alpha')
    .then(function (user) {
        console.log('got alpha');
        repository.getUserGeocacheList(user._id.toString(), 'nonexistent')
            .then(function (list) {
                console.log(JSON.stringify(list || 'could not get list'));
            })
            .fail(function (error) {
                console.log(error);
            });
    })
    .done();
