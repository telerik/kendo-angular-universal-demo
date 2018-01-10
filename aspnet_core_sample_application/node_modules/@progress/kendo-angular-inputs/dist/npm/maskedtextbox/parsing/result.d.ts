import { Stream } from './stream';
/**
 * @hidden
 */
export declare enum ResultType {
    Literal = 0,
    Mask = 1,
    Undefined = 2,
}
/**
 * @hidden
 */
export declare class Result {
    private value;
    private rest;
    type: ResultType;
    constructor(value: any, rest: Stream, type?: ResultType);
    map(fn: Function): Result;
    chain(fn: Function): Result;
    fold(s: Function, _?: Function): Result;
    concat(r: Result): Result;
    toString(): string;
}
