> [!NOTE]
> **Used software versions:**
> - Node.js: v20.10.0
> - npm: 10.2.3

# Geometric Shapes Library

## Overview
The Geometric Shapes Library provides a set of classes for common geometric shapes, each implementing specific shape-related functionalities. This library includes `Circle`, `Rectangle`, and `Triangle` classes, all of which use built-in event handling and promise-based methods to perform calculations.

## Installation

Clone the repository.
```bash
git clone git@github.com:MaximEYakovlev/geometric-shapes-library.git
```

Navigate to the Project Directory
```bash
cd geometric-shapes-library
```

Install Dependencies
```bash
npm install
```

Build the Library
```bash
npm run build
```

Test
```bash
npm test
```

## Usage

### Circle
```ts
// Import necessary classes
import { Circle } from './your_path';
import { EventEmitter } from './your_path';
import { Promisify } from './your_path';
import Emitter from 'node:events';

// Create instances of EventEmitter and Promisify
const eventEmitter = new EventEmitter(new Emitter());
const promisify = new Promisify();

// Create an instance of Circle
const circle = new Circle(5, eventEmitter, promisify);

// Register event listeners
eventEmitter.on('before getArea', (data) => {
    console.log(`Event: Before calculating area of ${data.shape}`);
});

eventEmitter.on('after getArea', (data) => {
    console.log(`Event: After calculating area of ${data.shape}, Area: ${data.calculation}`);
});

eventEmitter.on('before getCircumference', (data) => {
    console.log(`Event: Before calculating circumference of ${data.shape}`);
});

eventEmitter.on('after getCircumference', (data) => {
    console.log(`Event: After calculating circumference of ${data.shape}, Circumference: ${data.calculation}`);
});

eventEmitter.on('before getDiameter', (data) => {
    console.log(`Event: Before calculating diameter of ${data.shape}`);
});

eventEmitter.on('after getDiameter', (data) => {
    console.log(`Event: After calculating diameter of ${data.shape}, Diameter: ${data.calculation}`);
});

// Function to demonstrate using the Circle class methods
async function exampleUsage() {
    try {
        // Get the area of the circle
        const area = await circle.getArea();
        console.log(`Area: ${area}`);

        // Get the circumference of the circle
        const circumference = await circle.getCircumference();
        console.log(`Circumference: ${circumference}`);

        // Get the diameter of the circle
        const diameter = await circle.getDiameter();
        console.log(`Diameter: ${diameter}`);

        // Get the name and radius of the circle
        console.log(`Name: ${circle.getName()}`);
        console.log(`Radius: ${circle.getRadius()}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Run the example usage function
exampleUsage();
```

### Rectangle
```ts
// Import necessary classes
import { Rectangle } from './your_path';
import { EventEmitter } from './your_path';
import { Promisify } from './your_path';
import Emitter from 'node:events';

// Create instances of EventEmitter and Promisify
const eventEmitter = new EventEmitter(new Emitter());
const promisify = new Promisify();

// Create an instance of Rectangle
const rectangle = new Rectangle(10, 5, eventEmitter, promisify);

// Register event listeners
eventEmitter.on('before getArea', (data) => {
    console.log(`Event: Before calculating area of ${data.shape}`);
});

eventEmitter.on('after getArea', (data) => {
    console.log(`Event: After calculating area of ${data.shape}, Area: ${data.calculation}`);
});

eventEmitter.on('before getPerimeter', (data) => {
    console.log(`Event: Before calculating perimeter of ${data.shape}`);
});

eventEmitter.on('after getPerimeter', (data) => {
    console.log(`Event: After calculating perimeter of ${data.shape}, Perimeter: ${data.calculation}`);
});

// Function to demonstrate using the Rectangle class methods
async function exampleUsage() {
    try {
        // Get the area of the rectangle
        const area = await rectangle.getArea();
        console.log(`Area: ${area}`);

        // Get the perimeter of the rectangle
        const perimeter = await rectangle.getPerimeter();
        console.log(`Perimeter: ${perimeter}`);

        // Get the name, width, and height of the rectangle
        console.log(`Name: ${rectangle.getName()}`);
        console.log(`Width: ${rectangle.getWidth()}`);
        console.log(`Height: ${rectangle.getHeight()}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Run the example usage function
exampleUsage();
```

### Triangle
```ts
// Import necessary classes
import { Triangle } from './your_path';
import { EventEmitter } from './your_path';
import { Promisify } from './your_path';
import Emitter from 'node:events';

// Create instances of EventEmitter and Promisify
const eventEmitter = new EventEmitter(new Emitter());
const promisify = new Promisify();

// Create an instance of Triangle
const triangle = new Triangle(3, 4, 5, eventEmitter, promisify);

// Register event listeners
eventEmitter.on('before getArea', (data) => {
    console.log(`Event: Before calculating area of ${data.shape}`);
});

eventEmitter.on('after getArea', (data) => {
    console.log(`Event: After calculating area of ${data.shape}, Area: ${data.calculation}`);
});

eventEmitter.on('before getPerimeter', (data) => {
    console.log(`Event: Before calculating perimeter of ${data.shape}`);
});

eventEmitter.on('after getPerimeter', (data) => {
    console.log(`Event: After calculating perimeter of ${data.shape}, Perimeter: ${data.calculation}`);
});

// Function to demonstrate using the Triangle class methods
async function exampleUsage() {
    try {
        // Get the area of the triangle
        const area = await triangle.getArea();
        console.log(`Area: ${area}`);

        // Get the perimeter of the triangle
        const perimeter = await triangle.getPerimeter();
        console.log(`Perimeter: ${perimeter}`);

        // Get the name and sides of the triangle
        console.log(`Name: ${triangle.getName()}`);
        console.log(`Sides: ${triangle.getSidesLength().join(', ')}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Run the example usage function
exampleUsage();
```

## API Documentation
### Circle
Constructor
```ts
new Circle(radius: number, eventEmitter, promisify)
```
* radius: The radius of the circle.
* eventEmitter: Instance of the class 'EventEmitter'.
* promisify: Instance of the class 'Promisify'.

Methods
* getArea(): Promise<number>: Calculates the area of the circle.
* getCircumference(): Promise<number>: Calculates the circumference of the circle.
* getName(): string: Returns the name of the shape, which is 'Circle'.
* getRadius(): number: Returns the radius of the circle.
* getDiameter(): Promise<number>: Calculates the diameter of the circle.

### Rectangle
Constructor
```ts
new Rectangle(width: number, height: number, eventEmitter, promisify)
```
* width: The width of the rectangle.
* height: The height of the rectangle.
* eventEmitter: Instance of the class 'EventEmitter'.
* promisify: Instance of the class 'Promisify'.

Methods
* getArea(): Promise<number>: Calculates the area of the rectangle.
* getPerimeter(): Promise<number>: Calculates the perimeter of the rectangle.
* getName(): string: Returns the name of the shape, which is 'Rectangle'.
* getWidth(): number: Returns the width of the rectangle.
* getHeight(): number: Returns the height of the rectangle.

### Triangle
Constructor
```ts
new Triangle(sideA: number, sideB: number, sideC: number, eventEmitter, promisify)
```
* sideA: The length of the first side.
* sideB: The length of the second side.
* sideC: The length of the third side.
* eventEmitter: Instance of the class 'EventEmitter'.
* promisify: Instance of the class 'Promisify'.

Methods
* getArea(): Promise<number>: Calculates the area of the triangle using Heron's formula.
* getPerimeter(): Promise<number>: Calculates the perimeter of the triangle.
* getName(): string: Returns the name of the shape, which is 'Triangle'.
* getSidesLength(): number[]: Returns an array with the lengths of the triangle's sides.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request with any improvements or fixes. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.
