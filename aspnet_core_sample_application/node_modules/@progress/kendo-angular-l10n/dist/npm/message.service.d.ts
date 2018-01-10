/**
 * An abstract base class for a service that returns localized messages.
 *
 * For more information, refer to the section on [using the message service]({% slug messages_l10n_kendouiforangular %}#toc-using-the-message-service).
 */
export declare abstract class MessageService {
    /**
     * Returns a localized message for the supplied key.
     *
     * @param key - The message key. For example, `"kendo.grid.noRecords"`.
     * @return - The localized message for this key or `undefined` if not found.
     */
    abstract get(key: string): string | undefined;
}
