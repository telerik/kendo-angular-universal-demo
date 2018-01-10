import { EventEmitter, QueryList, ElementRef } from '@angular/core';
import { ListItemDirective } from './list-item.directive';
import { ItemTemplateDirective } from './templates/item-template.directive';
import { SelectionService } from './selection.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
/**
 * @hidden
 */
export declare class ListComponent {
    data: any[];
    selected: any[];
    focused: number;
    textField: string;
    valueField: string;
    height: number;
    template: ItemTemplateDirective;
    show: boolean;
    id: string;
    optionPrefix: string;
    multipleSelection: boolean;
    onClick: EventEmitter<any>;
    items: QueryList<ListItemDirective>;
    content: ElementRef;
    private selectionService;
    private scrollSubscription;
    constructor(selectionService: SelectionService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setContainerClasses(): any;
    getHeight(): string;
    getText(dataItem: any): any;
    getValue(dataItem: any): any;
    scrollToItem(index: number): void;
    scroll(item: ElementRef): void;
}
