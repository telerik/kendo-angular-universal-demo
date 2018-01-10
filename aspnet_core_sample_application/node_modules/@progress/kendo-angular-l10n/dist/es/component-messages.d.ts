import { OnChanges, SimpleChanges } from '@angular/core';
import { LocalizationService } from './localization.service';
/**
 * Base class that acts as a component messages container.
 *
 * For internal use.
 * @hidden
 */
export declare abstract class ComponentMessages implements OnChanges {
    protected service: LocalizationService;
    protected readonly override: boolean;
    ngOnChanges(changes: SimpleChanges): void;
}
