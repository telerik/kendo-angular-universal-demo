import { Result } from './result';
import { Stream } from './stream';
/**
 * @hidden
 */
export declare class Parser {
    private parse;
    constructor(parse: Function);
    run(input: Stream | string, control?: string): Result;
    map(f: Function): Parser;
    chain(f: Function): Parser;
    isLiteral(c: string): boolean;
}
/**
 * @hidden
 */
export declare const mask: ({prompt, promptPlaceholder}: {
    prompt: any;
    promptPlaceholder: any;
}) => (rule: any) => Parser;
/**
 * @hidden
 */
export declare const literal: (token: any) => Parser;
/**
 * @hidden
 */
export declare const unmask: (prompt: any) => (rule: any) => Parser;
/**
 * @hidden
 */
export declare const unliteral: (token: any) => Parser;
/**
 * @hidden
 */
export declare const token: (rules: any, creator: any) => Parser;
/**
 * @hidden
 */
export declare const rawMask: ({prompt, promptPlaceholder}: {
    prompt: any;
    promptPlaceholder: any;
}) => Parser;
/**
 * @hidden
 */
export declare const rawLiteral: (includeLiterals: any) => Parser;
