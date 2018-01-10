/**
 * @hidden
 */
export var isPresent = function (value) { return value !== null && value !== undefined; };
/**
 * @hidden
 */
export var isBlank = function (value) { return value === null || value === undefined; };
/**
 * @hidden
 */
export var isArray = function (value) { return Array.isArray(value); };
/**
 * @hidden
 */
export var isFunction = function (value) { return typeof value === 'function'; };
/**
 * @hidden
 */
export var isString = function (value) { return typeof value === 'string'; };
/**
 * @hidden
 */
export var isTruthy = function (value) { return !!value; };
/**
 * @hidden
 */
export var isNullOrEmptyString = function (value) { return isBlank(value) || value.trim().length === 0; };
/**
 * @hidden
 */
export var isNotNullOrEmptyString = function (value) { return !isNullOrEmptyString(value); };
/**
 * @hidden
 */
export var isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
/**
 * @hidden
 */
export var isDate = function (value) { return value && value.getTime; };
