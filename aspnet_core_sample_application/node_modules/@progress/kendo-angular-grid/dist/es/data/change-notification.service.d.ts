import { EventEmitter, NgZone } from '@angular/core';
import 'rxjs/add/operator/take';
/**
 * @hidden
 */
export declare class ChangeNotificationService {
    private ngZone;
    changes: EventEmitter<any>;
    private subscription;
    constructor(ngZone: NgZone);
    notify(): void;
}
