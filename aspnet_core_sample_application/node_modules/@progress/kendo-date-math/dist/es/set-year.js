import { addMonths } from './add-months';
import { createDate } from './create-date';
import { lastDayOfMonth } from './last-day-of-month';
/**
 * @hidden
 */
export var setYear = function (value, year) {
    var month = value.getMonth();
    var candidate = createDate(year, month, value.getDate(), value.getHours(), value.getMinutes(), value.getSeconds(), value.getMilliseconds());
    return candidate.getMonth() === month ? candidate : lastDayOfMonth(addMonths(candidate, -1));
};
