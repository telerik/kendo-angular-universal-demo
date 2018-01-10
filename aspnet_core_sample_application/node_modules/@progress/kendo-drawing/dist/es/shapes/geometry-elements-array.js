import ElementsArray from './elements-array';

var GeometryElementsArray = (function (ElementsArray) {
    function GeometryElementsArray () {
        ElementsArray.apply(this, arguments);
    }

    if ( ElementsArray ) GeometryElementsArray.__proto__ = ElementsArray;
    GeometryElementsArray.prototype = Object.create( ElementsArray && ElementsArray.prototype );
    GeometryElementsArray.prototype.constructor = GeometryElementsArray;

    GeometryElementsArray.prototype._change = function _change () {
        this.geometryChange();
    };

    return GeometryElementsArray;
}(ElementsArray));

export default GeometryElementsArray;
//# sourceMappingURL=geometry-elements-array.js.map
