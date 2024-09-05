/**
 * Interface describes a circle.
 */
export interface ICircle {
    /**
     * Returns the radius of the shape.
     * @returns {number} The radius of the shape.
     */
    getRadius(): number;

    /**
     * Calculates the diameter of the shape.
     * @returns {Promise<number>} The diameter of the shape.
     */
    getDiameter(): Promise<number>;

    /**
     * Calculates the circumference of the circle.
     * @returns {Promise<number>} The circumference of the circle.
     */
    getCircumference(): Promise<number>;
}
