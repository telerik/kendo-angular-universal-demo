"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kendo_data_query_1 = require("@progress/kendo-data-query");
var grid_component_1 = require("./grid.component");
var utils_1 = require("./utils");
var local_data_changes_service_1 = require("./editing/local-data-changes.service");
/**
 * A Directive which encapsulates the in-memory handling of data operations such as paging, sorting, and grouping.
 */
var DataBindingDirective = (function () {
    function DataBindingDirective(grid, localDataChangesService) {
        this.grid = grid;
        this.localDataChangesService = localDataChangesService;
        this.state = {
            skip: 0
        };
        this.originalData = [];
        if (localDataChangesService) {
            this.dataChangedSubscription = this.localDataChangesService.changes.subscribe(this.rebind.bind(this));
        }
    }
    Object.defineProperty(DataBindingDirective.prototype, "skip", {
        /**
         * Defines the number of records to be skipped by the pager.
         */
        set: function (value) {
            if (!utils_1.isPresent(value)) {
                value = 0;
            }
            this.grid.skip = this.state.skip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataBindingDirective.prototype, "sort", {
        /**
         * Defines the descriptors by which the data will be sorted.
         */
        set: function (value) {
            this.grid.sort = this.state.sort = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataBindingDirective.prototype, "filter", {
        /**
         * Defines the descriptor by which the data will be filtered.
         */
        set: function (value) {
            this.grid.filter = this.state.filter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataBindingDirective.prototype, "pageSize", {
        /**
         * Defines the page size used by the Grid pager.
         */
        set: function (value) {
            this.grid.pageSize = this.state.take = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataBindingDirective.prototype, "group", {
        /**
         * The descriptors by which the data will be grouped.
         */
        set: function (value) {
            this.grid.group = this.state.group = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataBindingDirective.prototype, "data", {
        /**
         * The array of data which will be used to populate the Grid.
         */
        set: function (value) {
            this.originalData = value || [];
            if (this.localDataChangesService) {
                this.localDataChangesService.data = value;
            }
            this.grid.data = this.process(this.state);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    DataBindingDirective.prototype.ngOnInit = function () {
        this.applyState(this.state);
        this.stateChangeSubscription = this.grid
            .dataStateChange
            .subscribe(this.onStateChange.bind(this));
    };
    /**
     * @hidden
     */
    DataBindingDirective.prototype.ngOnDestroy = function () {
        this.stateChangeSubscription.unsubscribe();
        if (this.dataChangedSubscription) {
            this.dataChangedSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    DataBindingDirective.prototype.ngOnChanges = function (changes) {
        if (utils_1.anyChanged(["pageSize", "skip", "sort", "group", "filter"], changes)) {
            this.rebind();
        }
    };
    /**
     * @hidden
     */
    DataBindingDirective.prototype.onStateChange = function (state) {
        this.applyState(state);
        this.rebind();
    };
    /**
     * @hidden
     */
    DataBindingDirective.prototype.rebind = function () {
        this.data = this.originalData;
        this.grid.onDataChange();
    };
    DataBindingDirective.prototype.process = function (state) {
        return kendo_data_query_1.process(this.originalData, state);
    };
    DataBindingDirective.prototype.applyState = function (_a) {
        var skip = _a.skip, take = _a.take, sort = _a.sort, group = _a.group, filter = _a.filter;
        this.skip = skip;
        this.pageSize = take;
        this.sort = sort;
        this.group = group;
        this.filter = filter;
    };
    return DataBindingDirective;
}());
DataBindingDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[kendoGridBinding]'
            },] },
];
/** @nocollapse */
DataBindingDirective.ctorParameters = function () { return [
    { type: grid_component_1.GridComponent, },
    { type: local_data_changes_service_1.LocalDataChangesService, },
]; };
DataBindingDirective.propDecorators = {
    'skip': [{ type: core_1.Input },],
    'sort': [{ type: core_1.Input },],
    'filter': [{ type: core_1.Input },],
    'pageSize': [{ type: core_1.Input },],
    'group': [{ type: core_1.Input },],
    'data': [{ type: core_1.Input, args: ["kendoGridBinding",] },],
};
exports.DataBindingDirective = DataBindingDirective;
