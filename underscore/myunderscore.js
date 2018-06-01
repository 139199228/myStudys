(function () {
    var root = typeof self == 'object' && self.self === self && self ||
        typeof global == 'object' && global.global === global && global ||
        this || {};
    var previousUnderscore = root._;
    var Ctor = function () {};
    var _ = function (obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
    };
    if (typeof exports != 'undefined' && !exports.nodeType) {
        if (typeof module != 'undefined' && !module.nodeType && module.exports) {
            exports = module.exports = _;
        }
        exports._ = _;
    } else {
        root._ = _;
    }
    _.VERSION = '1.9.0';
    /** 
     * @desc 判断两个数组是否相等
     * @param {array} arr1
     * @param {array} arr2
     * @return {boolen}
     **/
    _.arrayEqual = function (arr1, arr2) {
        if (arr1 === arr2) return true;
        if (arr1.length != arr2.length) return false;
        for (var i = 0; i < arr1.length; ++i) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }
    /**
     * @desc   格式化${startTime}距现在的已过时间
     * @param  {Date} startTime 
     * @return {String}
     */
    _.fromatPassTime = function (startTime) {

        var currenTime = Date.parse(new Date()),
            time = currenTime - startTime,
            day = parseInt(time / (1000 * 60 * 60 * 24)),
            hour = parseInt(time / (1000 * 60 * 60)),
            min = parseInt(time / (1000 * 60)),
            month = parseInt(day / 30),
            year = parseInt(month / 12);
        if (year) return `${year}年前`
        if (month) return `${month}个月前`
        if (day) return `${day}天前`
        if (hour) return `${hour}小时前`
        if (min) return `${min}分钟前`
        else return `刚刚`
    }

    _.prototype.toString = function () {
        return String(this._wrapped);
    };
    if (typeof define == 'function' && define.amd) {
        define('underscore', [], function () {
            return _;
        });
    }
}());