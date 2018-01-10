export * from './geometry/arc';
export * from './geometry/circle';
export * from './geometry/matrix';
export * from './geometry/point';
export * from './geometry/rect';
export * from './geometry/size';
export * from './geometry/segment';
export * from './geometry/transform';
export * from './geometry/transformation';

/**
 * Represents a change to a geometry object.
 */
export interface GeometryChange {
    /**
     * A reference to the changed geometry.
     */
    element: any;
}

/**
 * Represents an object that can listen to geometry changes.
 */
export interface GeometryObserver {
  /**
   * Triggered for each geometry change.
   *
   * @param e - The details for the geometry change.
   */
  geometryChange(e: GeometryChange): void;
}

/**
 * Represents an object that can emit geometry changes.
 *
 * @hidden
 */
export abstract class GeometryObservable<TSender> {
  /**
   * Returns the list of observers.
   *
   * @return - The current observers.
   */
  observers(): GeometryObserver[];

  /**
   * Adds an observer to be notified for changes.
   *
   * @param observer - The observer to add.
   * @return - The current Arc instance.
   */
  addObserver(observer: GeometryObserver): TSender;

  /**
   * Stops notifying the specified observer for changes.
   *
   * @param observer - The observer to remove.
   * @return - The current Arc instance.
   */
  removeObserver(observer: GeometryObserver): TSender;

  /**
   * Suspends the change notifications to all observers.
   *
   * @return - The current Arc instance.
   */
  suspend(): TSender;

  /**
   * Resumes the notification to all observers for changes.
   *
   * @return - The current Arc instance.
   */
  resume(): TSender;
}
