"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = void 0;
/**
 * Class for emitting and listening to shape-related events.
 * Uses the EventEmitter from Node.js.
 */
class EventEmitter {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
    }
    /**
     * Emit an event.
     * @param {string} eventName - The name of the event to emit.
     * @param {EventData} [data] - Data to pass with the event.
     * An object that contains event-specific data (e.g., shape and area).
     */
    emit(eventName, data) {
        this.eventEmitter.emit(eventName, data);
    }
    /**
     * Register an event listener.
     * @param {string} eventName - The name of the event to listen to.
     * @param {(data: EventData) => void} listener - The function to call when the event is emitted.
     * The listener will receive an object with event-specific data.
     */
    on(eventName, listener) {
        this.eventEmitter.on(eventName, listener);
    }
}
exports.EventEmitter = EventEmitter;
