import { EventEmitter } from '@angular/core';
/**
 * @hidden
 */
export declare class PDFService {
    savePDF: EventEmitter<any>;
    exportClick: EventEmitter<any>;
    dataChanged: EventEmitter<any>;
    save(component: any): void;
}
