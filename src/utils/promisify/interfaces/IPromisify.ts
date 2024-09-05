/**
 * Interface describes the Promisify utility class.
 */
export interface IPromisify {
    /**
     * Converts a synchronous function into a Promise-based function.
     * @param {Function} fn - The synchronous function to convert.
     * @returns {(...args: number[]) => Promise<number>} A function that returns a promise.
     */
    toPromise(
        fn: (...args: number[]) => number
    ): (...args: number[]) => Promise<number>;
}
