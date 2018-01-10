"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var kendo_angular_l10n_1 = require("@progress/kendo-angular-l10n");
var messages_1 = require("./messages");
/**
 * Custom component messages override default component messages.
 */
var CustomMessagesComponent = (function (_super) {
    tslib_1.__extends(CustomMessagesComponent, _super);
    function CustomMessagesComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        return _this;
    }
    Object.defineProperty(CustomMessagesComponent.prototype, "override", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return CustomMessagesComponent;
}(messages_1.Messages));
CustomMessagesComponent.decorators = [
    { type: core_1.Component, args: [{
                providers: [
                    {
                        provide: messages_1.Messages,
                        useExisting: core_1.forwardRef(function () { return CustomMessagesComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-grid-messages',
                template: ""
            },] },
];
/** @nocollapse */
CustomMessagesComponent.ctorParameters = function () { return [
    { type: kendo_angular_l10n_1.LocalizationService, },
]; };
exports.CustomMessagesComponent = CustomMessagesComponent;
