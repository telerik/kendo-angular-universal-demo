import * as tslib_1 from "tslib";
import { Input } from '@angular/core';
import { ComponentMessages } from '@progress/kendo-angular-l10n';
/**
 * @hidden
 */
var Messages = (function (_super) {
    tslib_1.__extends(Messages, _super);
    function Messages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Messages;
}(ComponentMessages));
export { Messages };
Messages.propDecorators = {
    'groupPanelEmpty': [{ type: Input },],
    'noRecords': [{ type: Input },],
    'pagerFirstPage': [{ type: Input },],
    'pagerLastPage': [{ type: Input },],
    'pagerPreviousPage': [{ type: Input },],
    'pagerNextPage': [{ type: Input },],
    'pagerPage': [{ type: Input },],
    'pagerItemsPerPage': [{ type: Input },],
    'pagerOf': [{ type: Input },],
    'pagerItems': [{ type: Input },],
    'filterEqOperator': [{ type: Input },],
    'filterNotEqOperator': [{ type: Input },],
    'filterIsNullOperator': [{ type: Input },],
    'filterIsNotNullOperator': [{ type: Input },],
    'filterIsEmptyOperator': [{ type: Input },],
    'filterIsNotEmptyOperator': [{ type: Input },],
    'filterStartsWithOperator': [{ type: Input },],
    'filterContainsOperator': [{ type: Input },],
    'filterNotContainsOperator': [{ type: Input },],
    'filterEndsWithOperator': [{ type: Input },],
    'filterGteOperator': [{ type: Input },],
    'filterGtOperator': [{ type: Input },],
    'filterLteOperator': [{ type: Input },],
    'filterLtOperator': [{ type: Input },],
    'filterIsTrue': [{ type: Input },],
    'filterIsFalse': [{ type: Input },],
    'filterBooleanAll': [{ type: Input },],
    'filterAfterOrEqualOperator': [{ type: Input },],
    'filterAfterOperator': [{ type: Input },],
    'filterBeforeOperator': [{ type: Input },],
    'filterBeforeOrEqualOperator': [{ type: Input },],
};
