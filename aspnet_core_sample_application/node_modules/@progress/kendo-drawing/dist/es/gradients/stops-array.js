import ElementsArray from '../shapes/elements-array';

var StopsArray = (function (ElementsArray) {
    function StopsArray () {
        ElementsArray.apply(this, arguments);
    }

    if ( ElementsArray ) StopsArray.__proto__ = ElementsArray;
    StopsArray.prototype = Object.create( ElementsArray && ElementsArray.prototype );
    StopsArray.prototype.constructor = StopsArray;

    StopsArray.prototype._change = function _change () {
        this.optionsChange({
            field: "stops"
        });
    };

    return StopsArray;
}(ElementsArray));

export default StopsArray;
//# sourceMappingURL=stops-array.js.map
