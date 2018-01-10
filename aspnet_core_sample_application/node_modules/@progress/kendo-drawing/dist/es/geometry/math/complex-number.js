import { PRECISION } from '../constants';
import { Class } from '../../common';
import { round } from '../../util';

var ComplexNumber = (function (Class) {
    function ComplexNumber(real, img) {
        if ( real === void 0 ) real = 0;
        if ( img === void 0 ) img = 0;

        Class.call(this);

        this.real = real;
        this.img = img;
    }

    if ( Class ) ComplexNumber.__proto__ = Class;
    ComplexNumber.prototype = Object.create( Class && Class.prototype );
    ComplexNumber.prototype.constructor = ComplexNumber;

    ComplexNumber.prototype.add = function add (cNumber) {
        return new ComplexNumber(round(this.real + cNumber.real, PRECISION), round(this.img + cNumber.img, PRECISION));
    };

    ComplexNumber.prototype.addConstant = function addConstant (value) {
        return new ComplexNumber(this.real + value, this.img);
    };

    ComplexNumber.prototype.negate = function negate () {
        return new ComplexNumber(-this.real, -this.img);
    };

    ComplexNumber.prototype.multiply = function multiply (cNumber) {
        return new ComplexNumber(this.real * cNumber.real - this.img * cNumber.img,
            this.real * cNumber.img + this.img * cNumber.real);
    };

    ComplexNumber.prototype.multiplyConstant = function multiplyConstant (value) {
        return new ComplexNumber(this.real * value, this.img * value);
    };

    ComplexNumber.prototype.nthRoot = function nthRoot (n) {
        var rad = Math.atan2(this.img, this.real);
        var r = Math.sqrt(Math.pow(this.img, 2) + Math.pow(this.real, 2));
        var nthR = Math.pow(r, 1 / n);

        return new ComplexNumber(nthR * Math.cos(rad / n), nthR * Math.sin(rad / n)); //Moivre's formula
    };

    ComplexNumber.prototype.equals = function equals (cNumber) {
        return this.real === cNumber.real && this.img === cNumber.img;
    };

    ComplexNumber.prototype.isReal = function isReal () {
        return this.img === 0;
    };

    return ComplexNumber;
}(Class));

export default ComplexNumber;
//# sourceMappingURL=complex-number.js.map
