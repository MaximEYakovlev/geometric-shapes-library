import { IShape } from '../shared/interfaces/IShape';
import { IPolygon } from './interfaces/IPolygon';
import { EventEmitter } from '../../utils/events/EventEmitter';
import { Promisify } from '../../utils/promisify/Promisify';

/**
 * The class represents a triangle.
 * Implements IShape, IPolygon interfaces.
 */
export class Triangle implements IShape, IPolygon {
    private sideA: number;
    private sideB: number;
    private sideC: number;
    private eventEmitter: EventEmitter;
    private promisify: Promisify;

    /**
     * Create a Triangle.
     * @param {number} sideA - The length of the first side.
     * @param {number} sideB - The length of the second side.
     * @param {number} sideC - The length of the third side.
     * @param {eventEmitter} eventEmitter - An instance of EventEmitter to handle events.
     * @param {promisify} promisify - An instance of Promisify to convert methods into a Promise-based function.
     * @throws {Error} If the sides do not form a valid triangle.
     */
    constructor(
        sideA: number,
        sideB: number,
        sideC: number,
        eventEmitter: EventEmitter,
        promisify: Promisify
    ) {
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
    private isValidTriangle(a: number, b: number, c: number): boolean {
        return a + b > c && a + c > b && b + c > a;
    }

    /**
     * Returns the area of the triangle using Heron's formula.
     * @returns {Promise<number>} A promise that resolves to the triangle area.
     */
    getArea(): Promise<number> {
        const calculateArea = (): number => {
            this.eventEmitter.emit('before getArea', { shape: 'Triangle' });

            const semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;
            const calculation = Math.sqrt(
                semiPerimeter *
                    (semiPerimeter - this.sideA) *
                    (semiPerimeter - this.sideB) *
                    (semiPerimeter - this.sideC)
            );
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
    getPerimeter(): Promise<number> {
        const calculatePerimeter = (): number => {
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
    getName(): string {
        return 'Triangle';
    }

    /**
     * Returns the length of the shape sides.
     * @returns {number[]} Array of shape sides length.
     */
    getSidesLength(): number[] {
        return [this.sideA, this.sideB, this.sideC];
    }
}
