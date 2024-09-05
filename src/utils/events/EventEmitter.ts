import Emitter from 'node:events';
import { IEventEmitter } from './interfaces/IEventEmitter';
import { EventData } from './types/EventData';

/**
 * Class for emitting and listening to shape-related events.
 * Uses the EventEmitter from Node.js.
 */
export class EventEmitter implements IEventEmitter {
    private eventEmitter: Emitter;

    constructor(eventEmitter: Emitter) {
        this.eventEmitter = eventEmitter;
    }

    /**
     * Emit an event.
     * @param {string} eventName - The name of the event to emit.
     * @param {EventData} [data] - Data to pass with the event.
     * An object that contains event-specific data (e.g., shape and area).
     */
    emit(eventName: string, data: EventData): void {
        this.eventEmitter.emit(eventName, data);
    }

    /**
     * Register an event listener.
     * @param {string} eventName - The name of the event to listen to.
     * @param {(data: EventData) => void} listener - The function to call when the event is emitted.
     * The listener will receive an object with event-specific data.
     */
    on(eventName: string, listener: (data: EventData) => void): void {
        this.eventEmitter.on(eventName, listener);
    }
}
