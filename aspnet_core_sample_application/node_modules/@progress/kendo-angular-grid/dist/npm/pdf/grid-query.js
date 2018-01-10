"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_queries_1 = require("../rendering/common/dom-queries");
/**
 * @hidden
 */
exports.HEADER_CLASS = 'k-grid-header';
/**
 * @hidden
 */
exports.FOOTER_CLASS = 'k-grid-footer';
var GRID_LIST = 'KENDO-GRID-LIST';
var TABLE = 'TABLE';
var matchesList = dom_queries_1.matchesNodeName(GRID_LIST);
var matchesTable = dom_queries_1.matchesNodeName(TABLE);
var suffix = function (locked) { return locked ? 'locked' : 'wrap'; };
/**
 * @hidden
 */
var GridQuery = (function () {
    function GridQuery(element) {
        this.element = element;
        this.list = dom_queries_1.findElement(element, matchesList);
    }
    GridQuery.prototype.content = function (locked) {
        return dom_queries_1.findElement(this.list, dom_queries_1.matchesClasses("k-grid-content" + (locked ? '-locked' : '')));
    };
    GridQuery.prototype.header = function (locked) {
        this.headerWrap = this.headerWrap || dom_queries_1.findElement(this.element, dom_queries_1.matchesClasses(exports.HEADER_CLASS));
        return dom_queries_1.findElement(this.headerWrap, dom_queries_1.matchesClasses(exports.HEADER_CLASS + "-" + suffix(locked)));
    };
    GridQuery.prototype.footer = function (locked) {
        this.footerWrap = this.footerWrap || dom_queries_1.findElement(this.element, dom_queries_1.matchesClasses(exports.FOOTER_CLASS));
        return dom_queries_1.findElement(this.footerWrap, dom_queries_1.matchesClasses(exports.FOOTER_CLASS + "-" + suffix(locked)));
    };
    GridQuery.prototype.table = function () {
        return dom_queries_1.findElement(this.element, matchesTable);
    };
    return GridQuery;
}());
exports.GridQuery = GridQuery;
