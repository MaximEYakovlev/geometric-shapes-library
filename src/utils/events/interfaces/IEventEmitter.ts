import { EventData } from '../types/EventData';

/**
 * Interface describes an EventEmitter.
 */
export interface IEventEmitter {
    /**
     * Emit an event.
     * @param {string} eventName - The name of the event to emit.
     * @param {EventData} [data] Data to pass with the event.
     * An object that contains event-specific data (e.g., shape and area).
     */
    emit(eventName: string, data: EventData): void;

    /**
     * Register an event listener.
     * @param {string} eventName - The name of the event to listen to.
     * @param {(data?: EventData) => void} listener - The function to call when the event is emitted.
     * The listener will receive an object with event-specific data.
     */
    on(eventName: string, listener: (data: EventData) => void): void;
}
