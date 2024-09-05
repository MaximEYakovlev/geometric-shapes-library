"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promisify = void 0;
/**
 * Class provides utility method to convert functions into async functions.
 */
class Promisify {
    /**
     * Converts a synchronous function into a Promise-based function.
     * @param {Function} fn - The synchronous function to convert.
     * @returns {(...args: number[]) => Promise<number>} A function that returns a promise.
     */
    toPromise(fn) {
        return (...args) => {
            return new Promise((resolve, reject) => {
                try {
                    const result = fn(...args);
                    resolve(result);
                }
                catch (error) {
                    reject(error);
                }
            });
        };
    }
}
exports.Promisify = Promisify;
