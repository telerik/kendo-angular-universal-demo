"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:use-life-cycle-interface */
var iterator_1 = require("rxjs/symbol/iterator");
var data_iterators_1 = require("./data.iterators");
/**
 * @hidden
 */
var DataResultIterator = (function () {
    function DataResultIterator(source, skip, groupFooters) {
        if (skip === void 0) { skip = 0; }
        if (groupFooters === void 0) { groupFooters = false; }
        this.source = source;
        this.skip = skip;
        this.groupFooters = groupFooters;
        this.source = this.source ? this.source : [];
        this.isObject = this.isGridDataResult(this.source);
    }
    DataResultIterator.prototype.isGridDataResult = function (source) {
        return source.total !== undefined && source.data !== undefined;
    };
    Object.defineProperty(DataResultIterator.prototype, "total", {
        get: function () {
            return this.isObject ? this.source.total : this.source.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataResultIterator.prototype, "data", {
        get: function () {
            return this.isObject ? this.source.data : this.source;
        },
        enumerable: true,
        configurable: true
    });
    DataResultIterator.prototype.map = function (fn) {
        return this.data.map(fn);
    };
    DataResultIterator.prototype.filter = function (fn) {
        return this.data.filter(fn);
    };
    DataResultIterator.prototype.reduce = function (fn, init) {
        return this.data.reduce(fn, init);
    };
    DataResultIterator.prototype.forEach = function (fn) {
        this.data.forEach(fn);
    };
    DataResultIterator.prototype.some = function (fn) {
        return this.data.some(fn);
    };
    DataResultIterator.prototype[iterator_1.$$iterator] = function () {
        return data_iterators_1.getIterator(this.data, {
            dataIndex: this.skip,
            footers: this.groupFooters,
            groupIndex: this.skip
        });
    };
    DataResultIterator.prototype.toString = function () { return this.data.toString(); };
    return DataResultIterator;
}());
exports.DataResultIterator = DataResultIterator;
/**
 * @hidden
 */
var DataCollection = (function () {
    function DataCollection(accessor) {
        this.accessor = accessor;
    }
    Object.defineProperty(DataCollection.prototype, "total", {
        get: function () { return this.accessor().total; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataCollection.prototype, "length", {
        get: function () { return this.accessor().data.length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataCollection.prototype, "first", {
        get: function () { return this.accessor().data[0]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataCollection.prototype, "last", {
        get: function () { return this.accessor().data[this.length - 1]; },
        enumerable: true,
        configurable: true
    });
    DataCollection.prototype.at = function (index) {
        return data_iterators_1.itemAt(this.accessor().data, index);
    };
    DataCollection.prototype.map = function (fn) { return this.accessor().map(fn); };
    DataCollection.prototype.filter = function (fn) {
        return this.accessor().filter(fn);
    };
    DataCollection.prototype.reduce = function (fn, init) {
        return this.accessor().reduce(fn, init);
    };
    DataCollection.prototype.forEach = function (fn) {
        this.accessor().forEach(fn);
    };
    DataCollection.prototype.some = function (fn) {
        return this.accessor().some(fn);
    };
    DataCollection.prototype[iterator_1.$$iterator] = function () {
        return this.accessor()[iterator_1.$$iterator]();
    };
    DataCollection.prototype.toString = function () { return this.accessor().toString(); };
    return DataCollection;
}());
exports.DataCollection = DataCollection;
