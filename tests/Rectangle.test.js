"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_events_1 = __importDefault(require("node:events"));
const Rectangle_1 = require("../src/shapes/rectangle/Rectangle");
const EventEmitter_1 = require("../src/utils/events/EventEmitter");
const Promisify_1 = require("../src/utils/promisify/Promisify");
describe('Rectangle', () => {
    let rectangle;
    let eventEmitter;
    let promisify;
    let mockEmitter;
    beforeEach(() => {
        mockEmitter = new node_events_1.default();
        eventEmitter = new EventEmitter_1.EventEmitter(mockEmitter);
        promisify = new Promisify_1.Promisify();
        rectangle = new Rectangle_1.Rectangle(10, 20, eventEmitter, promisify);
    });
    test('should return the correct area of the rectangle', () => __awaiter(void 0, void 0, void 0, function* () {
        const spyEmit = jest.spyOn(mockEmitter, 'emit');
        const result = yield rectangle.getArea();
        expect(result).toBe(200); // width * height for width = 10 and height = 20
        expect(spyEmit).toHaveBeenCalledWith('before getArea', {
            shape: 'Rectangle',
        });
        expect(spyEmit).toHaveBeenCalledWith('after getArea', {
            shape: 'Rectangle',
            calculation: result,
        });
    }));
    test('should return the correct perimeter of the rectangle', () => __awaiter(void 0, void 0, void 0, function* () {
        const spyEmit = jest.spyOn(mockEmitter, 'emit');
        const result = yield rectangle.getPerimeter();
        expect(result).toBe(60); // 2 * (width + height) for width = 10 and height = 20
        expect(spyEmit).toHaveBeenCalledWith('before getPerimeter', {
            shape: 'Rectangle',
        });
        expect(spyEmit).toHaveBeenCalledWith('after getPerimeter', {
            shape: 'Rectangle',
            calculation: result,
        });
    }));
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
