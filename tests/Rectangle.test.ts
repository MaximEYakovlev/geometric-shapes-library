import Emitter from 'node:events';
import { Rectangle } from '../src/shapes/rectangle/Rectangle';
import { EventEmitter } from '../src/utils/events/EventEmitter';
import { Promisify } from '../src/utils/promisify/Promisify';

describe('Rectangle', () => {
    let rectangle: Rectangle;
    let eventEmitter: EventEmitter;
    let promisify: Promisify;
    let mockEmitter: Emitter;

    beforeEach(() => {
        mockEmitter = new Emitter();
        eventEmitter = new EventEmitter(mockEmitter);
        promisify = new Promisify();
        rectangle = new Rectangle(10, 20, eventEmitter, promisify);
    });

    test('should return the correct area of the rectangle', async () => {
        const spyEmit = jest.spyOn(mockEmitter, 'emit');
        const result = await rectangle.getArea();
        expect(result).toBe(200); // width * height for width = 10 and height = 20
        expect(spyEmit).toHaveBeenCalledWith('before getArea', {
            shape: 'Rectangle',
        });
        expect(spyEmit).toHaveBeenCalledWith('after getArea', {
            shape: 'Rectangle',
            calculation: result,
        });
    });

    test('should return the correct perimeter of the rectangle', async () => {
        const spyEmit = jest.spyOn(mockEmitter, 'emit');
        const result = await rectangle.getPerimeter();
        expect(result).toBe(60); // 2 * (width + height) for width = 10 and height = 20
        expect(spyEmit).toHaveBeenCalledWith('before getPerimeter', {
            shape: 'Rectangle',
        });
        expect(spyEmit).toHaveBeenCalledWith('after getPerimeter', {
            shape: 'Rectangle',
            calculation: result,
        });
    });

    test('should return the name of the shape', () => {
        expect(rectangle.getName()).toBe('Rectangle');
    });

    test('should return the correct width of the rectangle', () => {
        expect(rectangle.getWidth()).toBe(10);
    });

    test('should return the correct height of the rectangle', () => {
        expect(rectangle.getHeight()).toBe(20);
    });
});
