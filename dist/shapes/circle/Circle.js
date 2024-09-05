"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
/**
 * The class represents a circle.
 * Implements IShape, ICircle interfaces.
 */
class Circle {
    /**
     * Create a circle.
     * @param {number} radius - The radius of the circle.
     * @param {eventEmitter} eventEmitter - An instance of EventEmitter to handle events.
     * @param {promisify} promisify - An instance of Promisify to convert methods into a Promise-based function.
     */
    constructor(radius, eventEmitter, promisify) {
        this.radius = radius;
        this.eventEmitter = eventEmitter;
        this.promisify = promisify;
    }
    /**
     * Calculates the area of the circle.
     * @returns {Promise<number>} A promise that resolves to the circle area.
     */
    getArea() {
        const calculateArea = () => {
            this.eventEmitter.emit('before getArea', { shape: 'Circle' });
            const calculation = Math.PI * this.radius * this.radius;
            return calculation;
        };
        return this.promisify
            .toPromise(calculateArea)()
            .then((calculation) => {
            this.eventEmitter.emit('after getArea', {
                shape: 'Circle',
                calculation,
            });
            return calculation;
        });
    }
    /**
     * Calculates the circumference of the circle.
     * @returns {Promise<number>} A promise that resolves to the circumference of the circle.
     */
    getCircumference() {
        const calculateCircumference = () => {
            this.eventEmitter.emit('before getCircumference', {
                shape: 'Circle',
            });
            const calculation = 2 * Math.PI * this.radius;
            return calculation;
        };
        return this.promisify
            .toPromise(calculateCircumference)()
            .then((calculation) => {
            this.eventEmitter.emit('after getCircumference', {
                shape: 'Circle',
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
        return 'Circle';
    }
    /**
     * Returns the radius of the shape.
     * @returns {number} The radius of the shape.
     */
    getRadius() {
        return this.radius;
    }
    /**
     * Calculates the diameter of the shape.
     * @returns {Promise<number>} The diameter of the shape.
     */
    getDiameter() {
        const calculateDiameter = () => {
            this.eventEmitter.emit('before getDiameter', {
                shape: 'Circle',
            });
            const calculation = this.radius * 2;
            return calculation;
        };
        return this.promisify
            .toPromise(calculateDiameter)()
            .then((calculation) => {
            this.eventEmitter.emit('after getDiameter', {
                shape: 'Circle',
                calculation,
            });
            return calculation;
        });
    }
}
exports.Circle = Circle;
