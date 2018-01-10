/**
 * The interface which defines a custom-format placeholder structure in the DateInput component.
 *
 * @example
 * ```ts
 * _@Component({
 * selector: 'my-app',
 * template: `
 *    <kendo-dateinput format="G"
 *      [formatPlaceholder]="{
 *        year: 'y', month: 'M', day: 'd',
 *        hour: 'h', minute: 'm', second: 's'
 *      }"
 *    ></kendo-dateinput>
 * `
 * })
 * class AppComponent { }
 * ```
 */
export interface DateInputCustomFormatPlaceholder {
    /**
     * Defines the description for the `year` format section.
     */
    year: string;
    /**
     * Defines the description for the `month` format section.
     */
    month: string;
    /**
     * Defines the description for the `day` format section.
     */
    day: string;
    /**
     * Defines the description for the `hour` format section.
     */
    hour: string;
    /**
     * Defines the description for the `minute` format section.
     */
    minute: string;
    /**
     * Defines the description for the `second` format section.
     */
    second: string;
}
/**
 * The union type which defines all possible format options of the DateInput placeholder.
 *
 * The available options are:
 * * `'wide'`&mdash;Displays the full description of the format section. For example, turns `MM` into `month`.
 * Retrieved from [CLDR](https://github.com/telerik/kendo-intl/blob/develop/docs/cldr/index.md).
 * * `'narrow'`&mdash;Displays the narrow description of the format section. For example, turns `MM` into `mo.`.
 * Retrieved from [CLDR](https://github.com/telerik/kendo-intl/blob/develop/docs/cldr/index.md).
 * * `'short'`&mdash;Displays the short description of the format section. For example, turns `MM` into `mo.`.
 * Retrieved from [CLDR](https://github.com/telerik/kendo-intl/blob/develop/docs/cldr/index.md).
 * *`'formatPattern'`&mdash;Directly displays the format section. For example, turns `MM` into `MM`.
 */
export declare type DateInputFormatPlaceholder = 'wide' | 'narrow' | 'short' | 'formatPattern' | DateInputCustomFormatPlaceholder;
