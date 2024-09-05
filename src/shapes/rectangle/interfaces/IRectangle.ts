/**
 * Interface describes a geometric shape with dimensions (width and height).
 */
export interface IRectangle {
    /**
     * Returns the width of the shape.
     * @returns {number} The width of the shape.
     */
    getWidth(): number;

    /**
     * Returns the height of the shape.
     * @returns {number} The height of the shape.
     */
    getHeight(): number;
}
