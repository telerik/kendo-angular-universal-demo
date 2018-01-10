/**
 * Base class that acts as a component messages container.
 *
 * For internal use.
 * @hidden
 */
var ComponentMessages = (function () {
    function ComponentMessages() {
    }
    Object.defineProperty(ComponentMessages.prototype, "override", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ComponentMessages.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var keys = Object.keys(changes);
        keys.forEach(function (key) { return _this.service.register(key, _this[key], _this.override); });
    };
    return ComponentMessages;
}());
export { ComponentMessages };
