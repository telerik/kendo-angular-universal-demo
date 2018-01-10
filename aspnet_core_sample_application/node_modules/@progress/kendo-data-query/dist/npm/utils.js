"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
exports.isPresent = function (value) { return value !== null && value !== undefined; };
/**
 * @hidden
 */
exports.isBlank = function (value) { return value === null || value === undefined; };
/**
 * @hidden
 */
exports.isArray = function (value) { return Array.isArray(value); };
/**
 * @hidden
 */
exports.isFunction = function (value) { return typeof value === 'function'; };
/**
 * @hidden
 */
exports.isString = function (value) { return typeof value === 'string'; };
/**
 * @hidden
 */
exports.isTruthy = function (value) { return !!value; };
/**
 * @hidden
 */
exports.isNullOrEmptyString = function (value) { return exports.isBlank(value) || value.trim().length === 0; };
/**
 * @hidden
 */
exports.isNotNullOrEmptyString = function (value) { return !exports.isNullOrEmptyString(value); };
/**
 * @hidden
 */
exports.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
/**
 * @hidden
 */
exports.isDate = function (value) { return value && value.getTime; };
