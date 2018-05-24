let _ = require("lodash");
const compose = _.flowRight;
class IO {
    constructor(f) {

        this.__value = f
    }
    map(f) {
        return new IO(compose(f, this.__value));
    }
    fileMap(f) {
        return this.map(f)
    }
}
IO.of = (x) => (new IO(_ => x));

var print = function (x) {
    return new IO(function () {
        return x
    })
}

var fs = require('fs')
var readFile = function (filename) {
    return new IO(function () {
        return fs.readFileSync(filename, 'utf-8')
    })
}
readFile('./a.text')
    .fileMap(print)