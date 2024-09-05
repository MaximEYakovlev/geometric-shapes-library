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
const Circle_1 = require("../src/shapes/circle/Circle");
const EventEmitter_1 = require("../src/utils/events/EventEmitter");
const Promisify_1 = require("../src/utils/promisify/Promisify");
describe('Circle', () => {
    let circle;
    let eventEmitter;
    let promisify;
    let mockEmitter;
    beforeEach(() => {
        mockEmitter = new node_events_1.default();
        eventEmitter = new EventEmitter_1.EventEmitter(mockEmitter);
        promisify = new Promisify_1.Promisify();
        circle = new Circle_1.Circle(5, eventEmitter, promisify);
    });
    test('should return the correct area of the circle', () => __awaiter(void 0, void 0, void 0, function* () {
        const spyEmit = jest.spyOn(mockEmitter, 'emit');
        const result = yield circle.getArea();
        expect(result).toBeCloseTo(Math.PI * 25, 5); // π * r^2 for r = 5
        expect(spyEmit).toHaveBeenCalledWith('before getArea', {
            shape: 'Circle',
        });
        expect(spyEmit).toHaveBeenCalledWith('after getArea', {
            shape: 'Circle',
            calculation: result,
        });
    }));
    test('should return the correct circumference of the circle', () => __awaiter(void 0, void 0, void 0, function* () {
        const spyEmit = jest.spyOn(mockEmitter, 'emit');
        const result = yield circle.getCircumference();
        expect(result).toBeCloseTo(2 * Math.PI * 5, 5); // 2πr for r = 5
        expect(spyEmit).toHaveBeenCalledWith('before getCircumference', {
            shape: 'Circle',
        });
        expect(spyEmit).toHaveBeenCalledWith('after getCircumference', {
            shape: 'Circle',
            calculation: result,
        });
    }));
    test('should return the name of the shape', () => {
        expect(circle.getName()).toBe('Circle');
    });
    test('should return the correct radius of the circle', () => {
        expect(circle.getRadius()).toBe(5);
    });
    test('should return the correct diameter of the circle', () => __awaiter(void 0, void 0, void 0, function* () {
        const spyEmit = jest.spyOn(mockEmitter, 'emit');
        const result = yield circle.getDiameter();
        expect(result).toBe(10); // 2 * r for r = 5
        expect(spyEmit).toHaveBeenCalledWith('before getDiameter', {
            shape: 'Circle',
        });
        expect(spyEmit).toHaveBeenCalledWith('after getDiameter', {
            shape: 'Circle',
            calculation: result,
        });
    }));
});
