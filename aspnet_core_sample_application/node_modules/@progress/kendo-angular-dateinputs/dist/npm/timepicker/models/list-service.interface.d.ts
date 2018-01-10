import { ListItem } from './list-item.interface';
import { ListServiceSettings } from './list-service-settings';
/**
 * @hidden
 */
export interface ListService {
    apply(value: Date, candidate: Date): Date;
    configure(settings: ListServiceSettings): void;
    data(value?: Date): ListItem[];
    isRangeChanged(min: Date, max: Date): boolean;
    limitRange(min: Date, max: Date, value?: Date): Date[];
    total(value?: Date): number;
    selectedIndex(value: Date): number;
    valueInList(value: Date): boolean;
}
