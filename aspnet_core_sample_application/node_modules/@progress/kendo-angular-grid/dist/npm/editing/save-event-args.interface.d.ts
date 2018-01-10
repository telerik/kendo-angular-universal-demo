import { EditEvent } from "./edit-event-args.interface";
import { FormGroup } from "@angular/forms/forms";
/**
 * The argument type of the `save` event.
 */
export interface SaveEvent extends EditEvent {
    /**
     * The edited `formGroup` instance.
     */
    formGroup: FormGroup;
}
