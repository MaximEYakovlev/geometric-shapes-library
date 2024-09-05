import Emitter from 'node:events';
import { Circle } from '../src/shapes/circle/Circle';
import { EventEmitter } from '../src/utils/events/EventEmitter';
import { Promisify } from '../src/utils/promisify/Promisify';

describe('Circle', () => {
    let circle: Circle;
    let eventEmitter: EventEmitter;
    let promisify: Promisify;
    let mockEmitter: Emitter;

    beforeEach(() => {
        mockEmitter = new Emitter();
        eventEmitter = new EventEmitter(mockEmitter);
        promisify = new Promisify();
        circle = new Circle(5, eventEmitter, promisify);
    });

    test('should return the correct area of the circle', async () => {
        const spyEmit = jest.spyOn(mockEmitter, 'emit');
        const result = await circle.getArea();
        expect(result).toBeCloseTo(Math.PI * 25, 5); // π * r^2 for r = 5
        expect(spyEmit).toHaveBeenCalledWith('before getArea', {
            shape: 'Circle',
        });
        expect(spyEmit).toHaveBeenCalledWith('after getArea', {
            shape: 'Circle',
            calculation: result,
        });
    });

    test('should return the correct circumference of the circle', async () => {
        const spyEmit = jest.spyOn(mockEmitter, 'emit');
        const result = await circle.getCircumference();
        expect(result).toBeCloseTo(2 * Math.PI * 5, 5); // 2πr for r = 5
        expect(spyEmit).toHaveBeenCalledWith('before getCircumference', {
            shape: 'Circle',
        });
        expect(spyEmit).toHaveBeenCalledWith('after getCircumference', {
            shape: 'Circle',
            calculation: result,
        });
    });

    test('should return the name of the shape', () => {
        expect(circle.getName()).toBe('Circle');
    });

    test('should return the correct radius of the circle', () => {
        expect(circle.getRadius()).toBe(5);
    });

    test('should return the correct diameter of the circle', async () => {
        const spyEmit = jest.spyOn(mockEmitter, 'emit');
        const result = await circle.getDiameter();
        expect(result).toBe(10); // 2 * r for r = 5
        expect(spyEmit).toHaveBeenCalledWith('before getDiameter', {
            shape: 'Circle',
        });
        expect(spyEmit).toHaveBeenCalledWith('after getDiameter', {
            shape: 'Circle',
            calculation: result,
        });
    });
});
