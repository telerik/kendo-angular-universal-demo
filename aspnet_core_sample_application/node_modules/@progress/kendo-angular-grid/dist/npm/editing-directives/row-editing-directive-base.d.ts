import { EditingDirectiveBase } from './editing-directive-base';
import { EditService } from './edit-service.interface';
/**
 * @hidden
 */
export declare abstract class RowEditingDirectiveBase extends EditingDirectiveBase {
    protected rowIndex: number;
    /**
     * @hidden
     */
    ngOnInit(): void;
    protected createDefaultService(): EditService;
    protected addHandler(): void;
    protected editHandler(args: any): void;
    protected saveHandler(args: any): void;
    protected closeEditor(rowIndex?: number): void;
    protected clean(): void;
}
