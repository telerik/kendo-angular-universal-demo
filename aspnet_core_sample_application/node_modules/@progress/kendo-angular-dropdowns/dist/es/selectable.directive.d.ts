import { SelectionService } from './selection.service';
/**
 * @hidden
 */
export declare class SelectableDirective {
    index: number;
    multipleSelection: boolean;
    private selectionService;
    constructor(selectionService: SelectionService);
    readonly focusedClassName: boolean;
    readonly selectedClassName: boolean;
    readonly ariaSelected: boolean;
    onClick(event: any): void;
}
