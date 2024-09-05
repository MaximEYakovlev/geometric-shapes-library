/**
 * Represents the data emitted with shape-related events.
 * This includes the name of the shape and an optional numerical value
 * (such as area, circumference, or other calculated properties).
 */
export type EventData = {
    /**
     * The name of the shape emitting the event.
     * For example, 'Circle', 'Rectangle', or 'Triangle'.
     */
    shape: string;

    /**
     * An optional numerical value associated with the shape.
     * This could be the area, circumference, perimeter, etc., depending on the event.
     */
    calculation?: number;
};
