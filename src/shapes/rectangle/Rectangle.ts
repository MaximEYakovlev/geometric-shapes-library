import { IShape } from '../shared/interfaces/IShape';
import { IRectangle } from './interfaces/IRectangle';
import { EventEmitter } from '../../utils/events/EventEmitter';
import { Promisify } from '../../utils/promisify/Promisify';

/**
 * The class represents a rectangle.
 * Implements IShape, IRectangle interfaces.
 */
export class Rectangle implements IShape, IRectangle {
    private width: number;
    private height: number;
    private eventEmitter: EventEmitter;
    private promisify: Promisify;

    /**
     * Create a Rectangle.
     * @param {number} width - The width of the rectangle.
     * @param {number} height - The height of the rectangle.
     * @param {eventEmitter} eventEmitter - An instance of EventEmitter to handle events.
     * @param {promisify} promisify - An instance of Promisify to convert methods into a Promise-based function.
     */
    constructor(
        width: number,
        height: number,
        eventEmitter: EventEmitter,
        promisify: Promisify
    ) {
        this.width = width;
        this.height = height;
        this.eventEmitter = eventEmitter;
        this.promisify = promisify;
    }

    /**
     * Returns the rectangle area.
     * @returns {Promise<number>} A promise that resolves to the rectangle area.
     */
    getArea(): Promise<number> {
        const calculateArea = (): number => {
            this.eventEmitter.emit('before getArea', { shape: 'Rectangle' });
            const calculation = this.width * this.height;
            return calculation;
        };

        return this.promisify
            .toPromise(calculateArea)()
            .then((calculation) => {
                this.eventEmitter.emit('after getArea', {
                    shape: 'Rectangle',
                    calculation,
                });
                return calculation;
            });
    }

    /**
     * Returns the rectangle perimeter.
     * @returns {Promise<number>} A promise that resolves to the rectangle perimeter.
     */
    getPerimeter(): Promise<number> {
        const calculatePerimeter = (): number => {
            this.eventEmitter.emit('before getPerimeter', {
                shape: 'Rectangle',
            });
            const calculation = (this.width + this.height) * 2;
            return calculation;
        };

        return this.promisify
            .toPromise(calculatePerimeter)()
            .then((calculation) => {
                this.eventEmitter.emit('after getPerimeter', {
                    shape: 'Rectangle',
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
        return 'Rectangle';
    }

    /**
     * Returns the width of the shape.
     * @returns {number} The width of the shape.
     */
    getWidth(): number {
        return this.width;
    }

    /**
     * Returns the height of the shape.
     * @returns {number} The height of the shape.
     */
    getHeight(): number {
        return this.height;
    }
}
