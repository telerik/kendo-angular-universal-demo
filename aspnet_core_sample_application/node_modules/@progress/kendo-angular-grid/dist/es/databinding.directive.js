import { Directive, Input } from '@angular/core';
import { process } from '@progress/kendo-data-query';
import { GridComponent } from './grid.component';
import { anyChanged, isPresent } from './utils';
import { LocalDataChangesService } from './editing/local-data-changes.service';
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
            if (!isPresent(value)) {
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
        if (anyChanged(["pageSize", "skip", "sort", "group", "filter"], changes)) {
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
        return process(this.originalData, state);
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
export { DataBindingDirective };
DataBindingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[kendoGridBinding]'
            },] },
];
/** @nocollapse */
DataBindingDirective.ctorParameters = function () { return [
    { type: GridComponent, },
    { type: LocalDataChangesService, },
]; };
DataBindingDirective.propDecorators = {
    'skip': [{ type: Input },],
    'sort': [{ type: Input },],
    'filter': [{ type: Input },],
    'pageSize': [{ type: Input },],
    'group': [{ type: Input },],
    'data': [{ type: Input, args: ["kendoGridBinding",] },],
};
