import { ElementRef, OnDestroy, NgZone, QueryList } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SuspendService } from '../scrolling/suspend.service';
import { PDFService } from './pdf.service';
import { PDFMarginComponent } from './pdf-margin.component';
import { PDFTemplateDirective } from './pdf-template.directive';
import { ColumnBase } from '../columns/column-base';
import { DrawOptions } from '@progress/kendo-drawing';
import { PDFExportComponent } from '@progress/kendo-angular-pdf-export';
/**
 * Configures the PDF export settings of the Kendo UI Grid.
 */
export declare class PDFComponent extends PDFExportComponent implements OnDestroy {
    protected pdfService: PDFService;
    protected suspendService: SuspendService;
    protected ngZone: NgZone;
    /**
     * Exports all Grid pages, starting from the first one.
     */
    allPages: boolean;
    columns: QueryList<ColumnBase>;
    /**
     * @hidden
     */
    marginComponent: PDFMarginComponent;
    /**
     * @hidden
     */
    pageTemplateDirective: PDFTemplateDirective;
    protected progress: HTMLElement;
    protected component: any;
    protected container: HTMLElement;
    protected skip: number;
    protected pageSize: number;
    protected originalHeight: string;
    protected originalOverflow: string;
    protected saveSubscription: Subscription;
    protected renderAllPages: boolean;
    protected originalColumns: ColumnBase[];
    constructor(pdfService: PDFService, suspendService: SuspendService, ngZone: NgZone, element: ElementRef);
    ngOnDestroy(): void;
    protected savePDF(component: any): void;
    protected initProgress(): void;
    protected applyScroll(overlay: HTMLElement): void;
    protected draw(): void;
    protected drawOptions(): DrawOptions;
    protected cleanup(): void;
    protected removeContainer(): void;
    protected changePage(skip: number, take: number, callback: () => void, columns?: any[]): void;
    protected changeColumns(columns: any[], callback: () => void): void;
    protected reset(): void;
    protected onStable(callback: () => void): void;
}
