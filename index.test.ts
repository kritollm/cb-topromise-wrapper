// Stupid to use a library for this simple test, but to use hours to write test and debug the tests because
// it can't handle async code and promises is more important than productivity :)

import { promiseWrapper } from '.';
const fs = require('fs');

const readFile = promiseWrapper(fs.readFile);

readFile('JsonData/yourfile.json', 'utf8')
    .then(console.log.bind(console))
    .catch(console.error.bind(console));

test('promise-wrapper-resolved', done => {

    function resultHandler({ error, result }) {
        try {
            expect(result).toBeTruthy();
            expect(error).toBeNull();
        } catch (e) {
            done.fail(e);
        }
        done();
    }
    const readFile = promiseWrapper(fs.readFile);
    readFile('.gitignore', 'utf8')
        .then(result => resultHandler({ error: null, result }))
        .catch(error => resultHandler({ error, result: null }));

});

test('promise-wrapper-catch', done => {

    function resultHandler({ error, result }) {
        try {
            expect(error).toBeTruthy();
            expect(result).toBeNull();
        } catch (e) {
            done.fail(e);
        }
        done();
    }
    const readFile = promiseWrapper(fs.readFile);
    readFile('._blabla_gitignore', 'utf8')
        .then(result => resultHandler({ error: null, result }))
        .catch(error => resultHandler({ error, result: null }));

});