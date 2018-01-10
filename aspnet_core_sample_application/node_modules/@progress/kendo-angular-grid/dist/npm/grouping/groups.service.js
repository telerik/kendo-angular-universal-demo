"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var expand_state_service_1 = require("../common/expand-state.service");
var utils_1 = require("../utils");
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
}(expand_state_service_1.ExpandStateService));
GroupsService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
GroupsService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [utils_1.Skip,] },] },
]; };
exports.GroupsService = GroupsService;
