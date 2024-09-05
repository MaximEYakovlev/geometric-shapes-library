/**
 * Interface describes an abstract geometric shape.
 */
export interface IShape {
    /**
     * Calculates the area of the shape.
     * @returns {Promise<number>} A promise that resolves to the area of the shape.
     */
    getArea(): Promise<number>;

    /**
     * Returns the name of the shape.
     * @returns {string} The name of the shape.
     */
    getName(): string;
}
