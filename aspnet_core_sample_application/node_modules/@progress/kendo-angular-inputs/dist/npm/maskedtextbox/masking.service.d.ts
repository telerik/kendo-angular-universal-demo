/**
 * @hidden
 */
export declare class MaskingService {
    rules: {
        [key: string]: RegExp;
    };
    prompt: string;
    mask: string;
    promptPlaceholder: string;
    includeLiterals: boolean;
    maskTokens: any[];
    unmaskTokens: any[];
    rawTokens: any[];
    validationTokens: any[];
    update({mask, prompt, promptPlaceholder, rules, includeLiterals}: any): void;
    validationValue(maskedValue?: string): string;
    rawValue(maskedValue?: string): string;
    /**
     * @hidden
     */
    maskRaw(rawValue?: string): string;
    maskInput(input: string, control: string, splitPoint: number): any;
    maskInRange(pasted: string, oldValue: string, start: number, end: number): any;
    private maskRemoved(input, control, splitPoint);
    private adjustPosition(input, selection);
    private maskInserted(input, control, splitPoint);
    protected readonly maskTokenCreator: {
        [key: string]: Function;
    };
    protected readonly unmaskTokenCreator: {
        [key: string]: Function;
    };
    protected readonly rawTokenCreator: {
        [key: string]: Function;
    };
    protected readonly validationTokenCreator: {
        [key: string]: Function;
    };
    private tokenize();
}
