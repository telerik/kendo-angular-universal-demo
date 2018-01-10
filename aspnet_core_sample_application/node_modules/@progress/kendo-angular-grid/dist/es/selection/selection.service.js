import { Injectable, EventEmitter } from '@angular/core';
import { $$iterator } from 'rxjs/symbol/iterator';
import { isPresent } from '../utils';
import { DomEventsService } from '../common/dom-events.service';
/**
 * @hidden
 */
var nextId = 0;
/**
 * @hidden
 */
var SelectionService = (function () {
    function SelectionService(domEvents) {
        var _this = this;
        this.changes = new EventEmitter();
        this.lastSelectionStartIndex = 0;
        this.currentSelection = [];
        this.selectAllChecked = false;
        this.cellClickSubscription = domEvents.cellClick.subscribe(function (args) {
            if (_this.options.enabled && !_this.options.checkboxOnly && args.type !== 'contextmenu') {
                _this.handleClick({ index: args.rowIndex, data: args.dataItem }, args.originalEvent);
            }
        });
        this.mousedownSubscription = domEvents.cellMousedown.subscribe(function (args) {
            if (_this.options.enabled && (!_this.options.mode || _this.options.mode === "multiple") &&
                !_this.options.checkboxOnly && args.originalEvent.shiftKey) {
                args.originalEvent.preventDefault();
            }
        });
        this.id = nextId++;
    }
    SelectionService.prototype.init = function (settings) {
        this.settings = settings;
        this.currentSelection = [];
        if (settings.selectable && settings.selectable.enabled !== false) {
            var iterator = this.getIterator();
            while (true) {
                var item = iterator.next();
                if (item.done) {
                    break;
                }
                if (item.value && item.value.type === "data") {
                    var rowArgs = {
                        dataItem: item.value.data,
                        index: item.value.index
                    };
                    if (settings.rowSelected(rowArgs)) {
                        this.currentSelection[item.value.index] = rowArgs;
                    }
                }
            }
        }
    };
    SelectionService.prototype.isSelected = function (index) {
        return this.options.enabled && isPresent(this.currentSelection[index]);
    };
    SelectionService.prototype.handleClick = function (item, event) {
        var ev;
        if (this.options.mode === "single" && (event.ctrlKey || event.metaKey) && this.isSelected(item.index)) {
            ev = this.toggle(item);
        }
        else if (this.options.mode === "multiple") {
            if ((event.ctrlKey || event.metaKey) && !event.shiftKey) {
                ev = this.toggle(item);
            }
            else if (event.shiftKey) {
                ev = this.addAllTo(item);
            }
        }
        if (!isPresent(ev)) {
            ev = this.select(item);
            this.currentSelection[item.index] = item.data;
        }
        if (!ev.selectedRows.length && !ev.deselectedRows.length) {
            return;
        }
        ev.ctrlKey = event.ctrlKey || event.metaKey;
        this.setDeprecatedEventProperties(ev);
        this.changes.emit(ev);
    };
    SelectionService.prototype.toggle = function (item) {
        var selectedRows = [];
        var deselectedRows = [];
        this.lastSelectionStartIndex = item.index;
        if (this.isSelected(item.index)) {
            deselectedRows.push({ dataItem: item.data, index: item.index });
        }
        else {
            selectedRows.push({ dataItem: item.data, index: item.index });
        }
        return {
            deselectedRows: deselectedRows,
            selectedRows: selectedRows
        };
    };
    SelectionService.prototype.toggleByIndex = function (index) {
        var iterator = this.getIterator();
        if (this.selectAllChecked && this.isSelected(index)) {
            this.selectAllChecked = false;
        }
        while (true) {
            var item = iterator.next();
            if (item.done) {
                break;
            }
            if (item.value && item.value.type === "data" && item.value.index === index) {
                var itemToToggle = {
                    data: item.value.data,
                    index: item.value.index
                };
                if (this.isSelected(index) || this.options.mode === "multiple") {
                    return this.toggle(itemToToggle);
                }
                else {
                    return this.select(itemToToggle);
                }
            }
        }
    };
    SelectionService.prototype.select = function (item) {
        var deselectedRows = [];
        var selectedRows = [];
        this.lastSelectionStartIndex = item.index;
        if (!this.isSelected(item.index)) {
            selectedRows.push({ dataItem: item.data, index: item.index });
        }
        this.currentSelection.forEach(function (row) {
            if (row.index !== item.index) {
                deselectedRows.push(row);
            }
        });
        return {
            deselectedRows: deselectedRows,
            selectedRows: selectedRows
        };
    };
    SelectionService.prototype.addAllTo = function (item) {
        var selectedRows = [];
        var deselectedRows = [];
        var start = Math.min(this.lastSelectionStartIndex, item.index);
        var end = Math.max(this.lastSelectionStartIndex, item.index);
        var iterator = this.getIterator();
        while (true) {
            var next = iterator.next();
            if (next.done) {
                break;
            }
            if (next.value && next.value.type === "data") {
                var idx = next.value.index;
                if ((idx < start || idx > end) && this.isSelected(idx)) {
                    deselectedRows.push({ dataItem: next.value.data, index: idx });
                }
                if ((idx >= start && idx <= end) && !this.isSelected(idx)) {
                    selectedRows.push({ dataItem: next.value.data, index: idx });
                }
            }
        }
        return {
            deselectedRows: deselectedRows,
            selectedRows: selectedRows
        };
    };
    SelectionService.prototype.updateAll = function (selectAllChecked) {
        this.selectAllChecked = selectAllChecked;
        var selectedRows = [];
        var deselectedRows = [];
        var iterator = this.getIterator();
        while (true) {
            var next = iterator.next();
            if (next.done) {
                break;
            }
            if (next.value && next.value.type === "data") {
                var idx = next.value.index;
                if (this.isSelected(idx) && !selectAllChecked) {
                    deselectedRows.push({ dataItem: next.value.data, index: idx });
                }
                if (!this.isSelected(idx) && selectAllChecked) {
                    selectedRows.push({ dataItem: next.value.data, index: idx });
                }
            }
        }
        if (!selectedRows.length && !deselectedRows.length) {
            return;
        }
        var ev = {
            deselectedRows: deselectedRows,
            selectedRows: selectedRows
        };
        this.setDeprecatedEventProperties(ev);
        this.changes.emit(ev);
    };
    Object.defineProperty(SelectionService.prototype, "selectAllState", {
        get: function () {
            if (this.selected.length === 0) {
                return false;
            }
            if (this.selected.length === this.settings.view.length) {
                return true;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectionService.prototype, "selected", {
        get: function () {
            return this.currentSelection.map(function (item) {
                return item.index;
            }).filter(function (n) { return typeof n === "number"; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectionService.prototype, "options", {
        get: function () {
            var defaultOptions = {
                checkboxOnly: false,
                enabled: true,
                mode: "multiple"
            };
            if (!isPresent(this.settings)) {
                return defaultOptions;
            }
            if (typeof this.settings.selectable === 'boolean') {
                return {
                    checkboxOnly: false,
                    enabled: this.settings.selectable,
                    mode: "multiple"
                };
            }
            else {
                return Object.assign(defaultOptions, this.settings.selectable);
            }
        },
        enumerable: true,
        configurable: true
    });
    SelectionService.prototype.ngOnDestroy = function () {
        if (this.cellClickSubscription) {
            this.cellClickSubscription.unsubscribe();
            this.cellClickSubscription = null;
        }
        if (this.mousedownSubscription) {
            this.mousedownSubscription.unsubscribe();
            this.mousedownSubscription = null;
        }
    };
    SelectionService.prototype.getIterator = function () {
        var accessor = this.settings.view.accessor();
        if (!accessor) {
            return;
        }
        return accessor[$$iterator]();
    };
    SelectionService.prototype.setDeprecatedEventProperties = function (ev) {
        if (ev.selectedRows.length >= ev.deselectedRows.length) {
            ev.selected = true;
            ev.index = ev.selectedRows[ev.selectedRows.length - 1].index;
        }
        else {
            ev.selected = false;
            ev.index = ev.deselectedRows[ev.deselectedRows.length - 1].index;
        }
        return ev;
    };
    return SelectionService;
}());
export { SelectionService };
SelectionService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SelectionService.ctorParameters = function () { return [
    { type: DomEventsService, },
]; };
