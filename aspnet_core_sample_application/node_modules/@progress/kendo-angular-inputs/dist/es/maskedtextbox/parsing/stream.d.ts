/**
 * @hidden
 */
export declare class Stream {
    private input;
    private control;
    private inputCursor;
    private controlCursor;
    constructor(input?: any[], control?: any[]);
    eof(): boolean;
    next(): {
        char: string;
        control: string;
    };
    peek(): {
        char: string;
        control: string;
    };
    eat_input(): void;
    eat_control(): void;
    eat(): void;
}
