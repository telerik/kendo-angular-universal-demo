import * as tslib_1 from "tslib";
// tslint:disable: no-access-missing-member
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PagerContextService } from "./pager-context.service";
import { PagerElementComponent } from './pager-element.component';
import { LocalizationService } from '@progress/kendo-angular-l10n';
/**
 * Displays buttons for navigating to the next and the last page.
 */
var PagerNextButtonsComponent = (function (_super) {
    tslib_1.__extends(PagerNextButtonsComponent, _super);
    function PagerNextButtonsComponent(localization, pagerContext, cd) {
        var _this = _super.call(this, localization, pagerContext) || this;
        _this.cd = cd;
        return _this;
    }
    Object.defineProperty(PagerNextButtonsComponent.prototype, "disabled", {
        /**
         * @hidden
         *
         * @readonly
         * @type {boolean}
         * @memberOf PagerNextButtonsComponent
         */
        get: function () {
            return this.currentPage === this.totalPages || !this.total;
        },
        enumerable: true,
        configurable: true
    });
    PagerNextButtonsComponent.prototype.onChanges = function (_a) {
        var total = _a.total, skip = _a.skip, pageSize = _a.pageSize;
        this.total = total;
        this.skip = skip;
        this.pageSize = pageSize;
        this.cd.markForCheck();
    };
    return PagerNextButtonsComponent;
}(PagerElementComponent));
export { PagerNextButtonsComponent };
PagerNextButtonsComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'kendo-pager-next-buttons',
                template: "\n        <a href=\"#\"\n            [title]=\"textFor('pagerNextPage')\"\n            (click)=\"currentPage !== totalPages ? changePage(currentPage) : false\"\n            [ngClass]=\"{\n                'k-link': true,\n                'k-pager-nav': true,\n                'k-state-disabled': disabled,\n                '': true\n            }\">\n            <span [attr.aria-label]=\"textFor('pagerNextPage')\"\n                [ngClass]=\"{\n                    'k-icon':true,\n                    'k-i-arrow-e': true\n                }\">\n            </span>\n        </a>\n        <a href=\"#\"\n            [title]=\"textFor('pagerLastPage')\"\n            (click)=\"currentPage !== totalPages ? changePage(totalPages-1) : false\"\n            [ngClass]=\"{\n                'k-link': true,\n                'k-pager-nav': true,\n                'k-state-disabled': disabled,\n                'k-pager-last': true\n            }\">\n            <span [attr.aria-label]=\"textFor('pagerLastPage')\"\n                [ngClass]=\"{\n                    'k-icon':true,\n                    'k-i-seek-e': true\n                }\">\n            </span>\n        </a>\n    "
            },] },
];
/** @nocollapse */
PagerNextButtonsComponent.ctorParameters = function () { return [
    { type: LocalizationService, },
    { type: PagerContextService, },
    { type: ChangeDetectorRef, },
]; };
