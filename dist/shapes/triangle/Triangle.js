"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
/**
 * The class represents a triangle.
 * Implements IShape, IPolygon interfaces.
 */
class Triangle {
    /**
     * Create a Triangle.
     * @param {number} sideA - The length of the first side.
     * @param {number} sideB - The length of the second side.
     * @param {number} sideC - The length of the third side.
     * @param {eventEmitter} eventEmitter - An instance of EventEmitter to handle events.
     * @param {promisify} promisify - An instance of Promisify to convert methods into a Promise-based function.
     * @throws {Error} If the sides do not form a valid triangle.
     */
    constructor(sideA, sideB, sideC, eventEmitter, promisify) {
        if (!this.isValidTriangle(sideA, sideB, sideC)) {
            throw new Error('Invalid triangle sides');
        }
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        this.eventEmitter = eventEmitter;
        this.promisify = promisify;
    }
    /**
     * Check if the given sides form a valid triangle.
     * @param {number} a - The length of the first side.
     * @param {number} b - The length of the second side.
     * @param {number} c - The length of the third side.
     * @returns {boolean} True if the sides form a valid triangle, false otherwise.
     */
    isValidTriangle(a, b, c) {
        return a + b > c && a + c > b && b + c > a;
    }
    /**
     * Returns the area of the triangle using Heron's formula.
     * @returns {Promise<number>} A promise that resolves to the triangle area.
     */
    getArea() {
        const calculateArea = () => {
            this.eventEmitter.emit('before getArea', { shape: 'Triangle' });
            const semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;
            const calculation = Math.sqrt(semiPerimeter *
                (semiPerimeter - this.sideA) *
                (semiPerimeter - this.sideB) *
                (semiPerimeter - this.sideC));
            return calculation;
        };
        return this.promisify
            .toPromise(calculateArea)()
            .then((calculation) => {
            this.eventEmitter.emit('after getArea', {
                shape: 'Triangle',
                calculation,
            });
            return calculation;
        });
    }
    /**
     * Returns the triangle perimeter.
     * @returns {Promise<number>} A promise that resolves to the triangle perimeter.
     */
    getPerimeter() {
        const calculatePerimeter = () => {
            this.eventEmitter.emit('before getPerimeter', {
                shape: 'Triangle',
            });
            const calculation = this.sideA + this.sideB + this.sideC;
            return calculation;
        };
        return this.promisify
            .toPromise(calculatePerimeter)()
            .then((calculation) => {
            this.eventEmitter.emit('after getPerimeter', {
                shape: 'Triangle',
                calculation,
            });
            return calculation;
        });
    }
    /**
     * Returns the name of the shape.
     * @returns {string} The name of the shape.
     */
    getName() {
        return 'Triangle';
    }
    /**
     * Returns the length of the shape sides.
     * @returns {number[]} Array of shape sides length.
     */
    getSidesLength() {
        return [this.sideA, this.sideB, this.sideC];
    }
}
exports.Triangle = Triangle;
