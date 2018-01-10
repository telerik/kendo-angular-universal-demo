import { ExpandStateService } from '../common/expand-state.service';
/**
 * @hidden
 */
export declare class GroupsService extends ExpandStateService {
    constructor(isCollapsed?: boolean);
    isInExpandedGroup(groupIndex: string, skipSelf?: boolean): boolean;
    expandChildren(groupIndex: string): void;
}
