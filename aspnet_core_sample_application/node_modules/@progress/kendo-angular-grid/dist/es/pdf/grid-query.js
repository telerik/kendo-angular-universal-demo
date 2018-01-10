import { matchesClasses, matchesNodeName, findElement } from '../rendering/common/dom-queries';
/**
 * @hidden
 */
export var HEADER_CLASS = 'k-grid-header';
/**
 * @hidden
 */
export var FOOTER_CLASS = 'k-grid-footer';
var GRID_LIST = 'KENDO-GRID-LIST';
var TABLE = 'TABLE';
var matchesList = matchesNodeName(GRID_LIST);
var matchesTable = matchesNodeName(TABLE);
var suffix = function (locked) { return locked ? 'locked' : 'wrap'; };
/**
 * @hidden
 */
var GridQuery = (function () {
    function GridQuery(element) {
        this.element = element;
        this.list = findElement(element, matchesList);
    }
    GridQuery.prototype.content = function (locked) {
        return findElement(this.list, matchesClasses("k-grid-content" + (locked ? '-locked' : '')));
    };
    GridQuery.prototype.header = function (locked) {
        this.headerWrap = this.headerWrap || findElement(this.element, matchesClasses(HEADER_CLASS));
        return findElement(this.headerWrap, matchesClasses(HEADER_CLASS + "-" + suffix(locked)));
    };
    GridQuery.prototype.footer = function (locked) {
        this.footerWrap = this.footerWrap || findElement(this.element, matchesClasses(FOOTER_CLASS));
        return findElement(this.footerWrap, matchesClasses(FOOTER_CLASS + "-" + suffix(locked)));
    };
    GridQuery.prototype.table = function () {
        return findElement(this.element, matchesTable);
    };
    return GridQuery;
}());
export { GridQuery };
