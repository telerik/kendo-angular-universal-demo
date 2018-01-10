import { Action } from '../models/navigation-action.enum';
import { KeyDown } from '../models/keydown.interface';
import { CalendarViewEnum } from '../models/view.enum';
import { BusViewService } from '../services/bus-view.service';
/**
 * @hidden
 */
export declare class NavigationService {
    private bus;
    constructor(bus: BusViewService);
    action(event: KeyDown): Action;
    move(value: Date, action: Action, activeView: CalendarViewEnum): Date;
}
