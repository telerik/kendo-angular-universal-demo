import ComplexNumber from './complex-number';
import { PRECISION } from '../constants';
import { round } from '../../util';

function numberSign(x) {
    return x < 0 ? -1 : 1;
}

function solveQuadraticEquation(a, b, c) {
    var squareRoot = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
    return [
        (-b + squareRoot) / (2 * a),
        (-b - squareRoot) / (2 * a)
    ];
}

//Cardano's formula
export default function solveCubicEquation(a, b, c, d) {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }

    var p = (3 * a * c - Math.pow(b, 2)) / (3 * Math.pow(a, 2));
    var q = (2 * Math.pow(b, 3) - 9 * a * b * c + 27 * Math.pow(a, 2) * d) / (27 * Math.pow(a, 3));
    var Q = Math.pow(p / 3, 3) + Math.pow(q / 2, 2);
    var i = new ComplexNumber(0,1);
    var b3a = -b / (3 * a);
    var x1, x2, y1, y2, y3, z1, z2;

    if (Q < 0) {
        x1 = new ComplexNumber(-q / 2, Math.sqrt(-Q)).nthRoot(3);
        x2 = new ComplexNumber(-q / 2, - Math.sqrt(-Q)).nthRoot(3);
    } else {
        x1 = -q / 2 + Math.sqrt(Q);
        x1 = new ComplexNumber(numberSign(x1) * Math.pow(Math.abs(x1), 1 / 3));
        x2 = -q / 2 - Math.sqrt(Q);
        x2 = new ComplexNumber(numberSign(x2) * Math.pow(Math.abs(x2), 1 / 3));
    }

    y1 = x1.add(x2);

    z1 = x1.add(x2).multiplyConstant(-1 / 2);
    z2 = x1.add(x2.negate()).multiplyConstant(Math.sqrt(3) / 2);

    y2 = z1.add(i.multiply(z2));
    y3 = z1.add(i.negate().multiply(z2));

    var result = [];

    if (y1.isReal()) {
        result.push(round(y1.real + b3a, PRECISION));
    }
    if (y2.isReal()) {
        result.push(round(y2.real + b3a, PRECISION));
    }
    if (y3.isReal()) {
        result.push(round(y3.real + b3a, PRECISION));
    }

    return result;
}
//# sourceMappingURL=solve-cubic-equation.js.map
