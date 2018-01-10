/**
 * Stores nested settings and notifies an (optional) observer of changes.
 *
 * @example
 * ```ts-no-run
 * import { OptionsStore } from '@progress/kendo-drawing';
 *
 * const options = new OptionsStore({
 *   foo: {
 *     bar: true
 *   }
 * });
 * ```
 */
export class OptionsStore {
  /**
   * An optional observer for the `options` store.
   *
   * Upon field modification, the `optionsChange(e)` method on the observer will be called and will provide information for the change.
   */
  observer: OptionsObserver;

  /**
   * @param options - The initial values of all options.
   */
  constructor(options?: any);

  /**
   * Gets the value of the specified option.
   *
   * @param field - The field name to retrieve. Has to be a fully qualified name for nested options. For example, `"foo.bar"`.
   * @return - The current option value.
   * @example
   * ```ts-no-run
   * import { OptionsStore } from '@progress/kendo-drawing';
   *
   * const options = new OptionsStore({
   *   foo: {
   *     bar: true
   *   }
   * });
   *
   * // The bar variable will be set to true by any of these statements:
   * const bar = options.get("foo.bar");
   * const bar = options.foo.get("bar");
   * const bar = options.foo.bar;
   * ```
   */
  get(field: string): any;

  /**
   * Sets the value of the specified option.
   *
   * @param field - The name of the option to set. Has to be a fully qualified name for nested options. For example, `"foo.bar"`.
   * @param value - The new option value. If the new value is the same as the old value, the operation will not notify the observer, if any.
   *
   * @example
   * ```ts-no-run
   * import { OptionsStore } from '@progress/kendo-drawing';
   *
   * const options = new OptionsStore({
   *   foo: {
   *     bar: true
   *   }
   * });
   *
   * // The foo.bar setting will be set to false by any of these statements:
   * options.set("foo.bar", false);
   * options.foo.set("bar", false);
   *
   * // The following statement will succeed,
   * // but will not trigger optionsChange on the observer, if any.
   * options.foo.bar = false;
   * ```
   */
  set(field: string, value: any): void;
}

/**
 * Contains information for a change in an `OptionsStore`.
 *
 * @see OptionsObserver
 */
export interface OptionsChange {
  /**
   * The fully qualified field name.
   */
  field: string;

  /**
   * The new field value.
   */
  value: any;
}

/**
 * Defines the interface of an object that listens to changes on an `OptionsStore`.
 *
 * @see OptionsStore
 */
export interface OptionsObserver {
  /**
   * Called when an option changes.
   *
   * @example
   * ```ts-no-run
   * import { OptionsStore, OptionsChange } from '@progress/kendo-drawing';
   *
   * class Observer implements OptionsObserver {
   *   optionsChange(change: OptionsChange) {
   *     console.log(change.field, change.value);
   *   }
   * }
   *
   * const options = new OptionsStore();
   * options.observer = new Observer();
   *
   * options.set('foo', 'bar');
   * ```
   *
   * @param change - Detailed information for the change.
   */
  optionsChange(change: OptionsChange): void;
}
