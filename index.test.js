// Stupid to use a library for this simple test, but to use hours to write test and debug the tests because
// it can't handle async code and promises is more important than productivity :)
"use strict";
var _1 = require(".");
var fs = require('fs');
var readFile = _1.promiseWrapper(fs.readFile);
readFile('JsonData/yourfile.json', 'utf8')
    .then(console.log.bind(console))
    .catch(console.error.bind(console));
test('promise-wrapper-resolved', function (done) {
    function resultHandler(_a) {
        var error = _a.error, result = _a.result;
        try {
            expect(result).toBeTruthy();
            expect(error).toBeNull();
        }
        catch (e) {
            done.fail(e);
        }
        done();
    }
    var readFile = _1.promiseWrapper(fs.readFile);
    readFile('.gitignore', 'utf8')
        .then(function (result) { return resultHandler({ error: null, result: result }); })
        .catch(function (error) { return resultHandler({ error: error, result: null }); });
});
test('promise-wrapper-catch', function (done) {
    function resultHandler(_a) {
        var error = _a.error, result = _a.result;
        try {
            expect(error).toBeTruthy();
            expect(result).toBeNull();
        }
        catch (e) {
            done.fail(e);
        }
        done();
    }
    var readFile = _1.promiseWrapper(fs.readFile);
    readFile('._blabla_gitignore', 'utf8')
        .then(function (result) { return resultHandler({ error: null, result: result }); })
        .catch(function (error) { return resultHandler({ error: error, result: null }); });
});
