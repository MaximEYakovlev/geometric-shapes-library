import Emitter from 'node:events';
import { Triangle } from '../src/shapes/triangle/Triangle';
import { EventEmitter } from '../src/utils/events/EventEmitter';
import { Promisify } from '../src/utils/promisify/Promisify';

describe('Triangle', () => {
    let triangle: Triangle;
    let eventEmitter: EventEmitter;
    let promisify: Promisify;
    let mockEmitter: Emitter;

    beforeEach(() => {
        mockEmitter = new Emitter();
        eventEmitter = new EventEmitter(mockEmitter);
        promisify = new Promisify();
        triangle = new Triangle(3, 4, 5, eventEmitter, promisify);
    });

    test('should return the correct area of the triangle', async () => {
        const spyEmit = jest.spyOn(mockEmitter, 'emit');
        const result = await triangle.getArea();
        const semiPerimeter = (3 + 4 + 5) / 2;
        const expectedArea = Math.sqrt(
            semiPerimeter * 
            (semiPerimeter - 3) *
            (semiPerimeter - 4) *
            (semiPerimeter - 5)
        );
        expect(result).toBeCloseTo(expectedArea, 5); // Heron's formula
        expect(spyEmit).toHaveBeenCalledWith('before getArea', {
            shape: 'Triangle',
        });
        expect(spyEmit).toHaveBeenCalledWith('after getArea', {
            shape: 'Triangle',
            calculation: result,
        });
    });

    test('should return the correct perimeter of the triangle', async () => {
        const spyEmit = jest.spyOn(mockEmitter, 'emit');
        const result = await triangle.getPerimeter();
        expect(result).toBe(3 + 4 + 5); // Perimeter of the triangle
        expect(spyEmit).toHaveBeenCalledWith('before getPerimeter', {
            shape: 'Triangle',
        });
        expect(spyEmit).toHaveBeenCalledWith('after getPerimeter', {
            shape: 'Triangle',
            calculation: result,
        });
    });

    test('should return the name of the shape', () => {
        expect(triangle.getName()).toBe('Triangle');
    });

    test('should return the correct sides of the triangle', () => {
        expect(triangle.getSidesLength()).toEqual([3, 4, 5]);
    });

    test('should throw an error if the sides do not form a valid triangle', () => {
        expect(() => new Triangle(1, 2, 3, eventEmitter, promisify))
            .toThrow('Invalid triangle sides');
    });
});
