import * as tslib_1 from "tslib";
import { Injectable, Optional, Inject } from '@angular/core';
import { ExpandStateService } from '../common/expand-state.service';
import { Skip } from "../utils";
var removeLast = function (groupIndex) { return groupIndex.lastIndexOf("_") > -1
    ? groupIndex.slice(0, groupIndex.lastIndexOf("_"))
    : ""; };
/**
 * @hidden
 */
var GroupsService = (function (_super) {
    tslib_1.__extends(GroupsService, _super);
    function GroupsService(isCollapsed) {
        if (isCollapsed === void 0) { isCollapsed = false; }
        return _super.call(this, isCollapsed) || this;
    }
    GroupsService.prototype.isInExpandedGroup = function (groupIndex, skipSelf) {
        if (skipSelf === void 0) { skipSelf = true; }
        if (skipSelf) {
            groupIndex = removeLast(groupIndex);
        }
        var expanded = true;
        while (groupIndex && expanded) {
            expanded = this.isExpanded(groupIndex);
            groupIndex = removeLast(groupIndex);
        }
        return expanded;
    };
    GroupsService.prototype.expandChildren = function (groupIndex) {
        this.rowState = this.rowState.filter(function (x) { return !x.startsWith(groupIndex); });
    };
    return GroupsService;
}(ExpandStateService));
export { GroupsService };
GroupsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GroupsService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [Skip,] },] },
]; };
