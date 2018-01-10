import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
/**
 * @hidden
 */
export declare class FilterInputDirective {
    change: EventEmitter<string>;
    value: string;
    private accessor;
    constructor(valueAccessors: ControlValueAccessor[]);
    ngOnInit(): void;
}
