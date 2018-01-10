import { EditService } from './edit-service.interface';
import { LocalDataChangesService } from '../editing/local-data-changes.service';
/**
 * @hidden
 */
export declare class LocalEditService implements EditService {
    private grid;
    private localDataChangesService;
    constructor(grid: any, localDataChangesService: LocalDataChangesService);
    create(item: any): void;
    update(_item: any): void;
    remove(item: any): void;
    assignValues(target: any, source: any): void;
    protected dataChanged(): void;
    protected readonly hasLocalData: boolean;
    protected readonly data: any[];
}
