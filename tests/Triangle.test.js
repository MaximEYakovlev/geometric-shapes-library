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
const Triangle_1 = require("../src/shapes/triangle/Triangle");
const EventEmitter_1 = require("../src/utils/events/EventEmitter");
const Promisify_1 = require("../src/utils/promisify/Promisify");
describe('Triangle', () => {
    let triangle;
    let eventEmitter;
    let promisify;
    let mockEmitter;
    beforeEach(() => {
        mockEmitter = new node_events_1.default();
        eventEmitter = new EventEmitter_1.EventEmitter(mockEmitter);
        promisify = new Promisify_1.Promisify();
        triangle = new Triangle_1.Triangle(3, 4, 5, eventEmitter, promisify);
    });
    test('should return the correct area of the triangle', () => __awaiter(void 0, void 0, void 0, function* () {
        const spyEmit = jest.spyOn(mockEmitter, 'emit');
        const result = yield triangle.getArea();
        const semiPerimeter = (3 + 4 + 5) / 2;
        const expectedArea = Math.sqrt(semiPerimeter *
            (semiPerimeter - 3) *
            (semiPerimeter - 4) *
            (semiPerimeter - 5));
        expect(result).toBeCloseTo(expectedArea, 5); // Heron's formula
        expect(spyEmit).toHaveBeenCalledWith('before getArea', {
            shape: 'Triangle',
        });
        expect(spyEmit).toHaveBeenCalledWith('after getArea', {
            shape: 'Triangle',
            calculation: result,
        });
    }));
    test('should return the correct perimeter of the triangle', () => __awaiter(void 0, void 0, void 0, function* () {
        const spyEmit = jest.spyOn(mockEmitter, 'emit');
        const result = yield triangle.getPerimeter();
        expect(result).toBe(3 + 4 + 5); // Perimeter of the triangle
        expect(spyEmit).toHaveBeenCalledWith('before getPerimeter', {
            shape: 'Triangle',
        });
        expect(spyEmit).toHaveBeenCalledWith('after getPerimeter', {
            shape: 'Triangle',
            calculation: result,
        });
    }));
    test('should return the name of the shape', () => {
        expect(triangle.getName()).toBe('Triangle');
    });
    test('should return the correct sides of the triangle', () => {
        expect(triangle.getSidesLength()).toEqual([3, 4, 5]);
    });
    test('should throw an error if the sides do not form a valid triangle', () => {
        expect(() => new Triangle_1.Triangle(1, 2, 3, eventEmitter, promisify))
            .toThrow('Invalid triangle sides');
    });
});
