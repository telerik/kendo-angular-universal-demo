import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import 'rxjs/add/operator/throttleTime';
/**
 * @hidden
 */
export declare class ResizeService {
    resizeSubscription: Subscription;
    private dispatcher;
    changes: Observable<any>;
    connect(resizes: Observable<any>): void;
    destroy(): void;
}
