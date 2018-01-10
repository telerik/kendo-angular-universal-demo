import { CollisionType } from './collision.type';
/**
 * Defines the horizontal and vertical collision behavior of the component.
 */
export interface Collision {
    /**
     * Defines the horizontal collision behavior of the component.
     */
    horizontal: CollisionType;
    /**
     * Defines the vertical collision behavior of the component.
     */
    vertical: CollisionType;
}
