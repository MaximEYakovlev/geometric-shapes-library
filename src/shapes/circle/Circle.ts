import { IShape } from '../shared/interfaces/IShape';
import { ICircle } from './interfaces/ICircle';
import { EventEmitter } from '../../utils/events/EventEmitter';
import { Promisify } from '../../utils/promisify/Promisify';

/**
 * The class represents a circle.
 * Implements IShape, ICircle interfaces.
 */
export class Circle implements IShape, ICircle {
    private readonly radius: number;
    private eventEmitter: EventEmitter;
    private promisify: Promisify;

    /**
     * Create a circle.
     * @param {number} radius - The radius of the circle.
     * @param {eventEmitter} eventEmitter - An instance of EventEmitter to handle events.
     * @param {promisify} promisify - An instance of Promisify to convert methods into a Promise-based function.
     */
    constructor(
        radius: number,
        eventEmitter: EventEmitter,
        promisify: Promisify
    ) {
        this.radius = radius;
        this.eventEmitter = eventEmitter;
        this.promisify = promisify;
    }

    /**
     * Calculates the area of the circle.
     * @returns {Promise<number>} A promise that resolves to the circle area.
     */
    getArea(): Promise<number> {
        const calculateArea = (): number => {
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
    getCircumference(): Promise<number> {
        const calculateCircumference = (): number => {
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
    getName(): string {
        return 'Circle';
    }

    /**
     * Returns the radius of the shape.
     * @returns {number} The radius of the shape.
     */
    getRadius(): number {
        return this.radius;
    }

    /**
     * Calculates the diameter of the shape.
     * @returns {Promise<number>} The diameter of the shape.
     */
    getDiameter(): Promise<number> {
        const calculateDiameter = (): number => {
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
