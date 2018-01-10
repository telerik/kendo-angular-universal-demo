/**
 * A preventable event instance triggered by the open and close events.
 */
export declare class PreventableEvent {
    private prevented;
    /**
     * Prevents the default action for a specified event.
     * In this way, the source component suppresses the built-in behavior that follows the event.
     */
    preventDefault(): void;
    /**
     * If the event is prevented by any of its subscribers, returns `true`.
     *
     * @returns `true` if the default action was prevented. Otherwise, returns `false`.
     */
    isDefaultPrevented(): boolean;
}
