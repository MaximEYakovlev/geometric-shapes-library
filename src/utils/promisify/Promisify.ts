import { IPromisify } from './interfaces/IPromisify';

/**
 * Class provides utility method to convert functions into async functions.
 */
export class Promisify implements IPromisify {
    /**
     * Converts a synchronous function into a Promise-based function.
     * @param {Function} fn - The synchronous function to convert.
     * @returns {(...args: number[]) => Promise<number>} A function that returns a promise.
     */
    toPromise(
        fn: (...args: number[]) => number
    ): (...args: number[]) => Promise<number> {
        return (...args: number[]): Promise<number> => {
            return new Promise((resolve, reject) => {
                try {
                    const result = fn(...args);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            });
        };
    }
}
