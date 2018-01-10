import { setYear } from './set-year';
/**
 * @hidden
 */
export var normalizeYear = function (value, year) { return (setYear(value, year(value.getFullYear()))); };
