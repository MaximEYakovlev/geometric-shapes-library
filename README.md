> [!NOTE]
> **Used software versions:**
> - Node.js: v20.10.0

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

Use the Library in Your Project
```bash
import { Circle, Rectangle, Triangle } from '../path-to-geometric-shapes-library/dist/index';
```

## Usage

### Circle
```ts
import { Circle } from '../path-to-geometric-shapes-library/dist/index';

const circle = new Circle(5);

circle.getArea().then(area => console.log(`Area: ${area}`));
circle.getCircumference().then(circumference => console.log(`Circumference: ${circumference}`));
console.log(`Name: ${circle.getName()}`);
console.log(`Radius: ${circle.getRadius()}`);
circle.getDiameter().then(diameter => console.log(`Diameter: ${diameter}`));
```

### Rectangle
```ts
import { Rectangle } from '../path-to-geometric-shapes-library/dist/index';

const rectangle = new Rectangle(10, 5);

rectangle.getArea().then(area => console.log(`Area: ${area}`));
rectangle.getPerimeter().then(perimeter => console.log(`Perimeter: ${perimeter}`));
console.log(`Name: ${rectangle.getName()}`);
console.log(`Width: ${rectangle.getWidth()}`);
console.log(`Height: ${rectangle.getHeight()}`);
```

### Triangle
```ts
import { Triangle } from '../path-to-geometric-shapes-library/dist/index';

const triangle = new Triangle(3, 4, 5);

triangle.getArea().then(area => console.log(`Area: ${area}`));
triangle.getPerimeter().then(perimeter => console.log(`Perimeter: ${perimeter}`));
console.log(`Name: ${triangle.getName()}`);
console.log(`Sides: ${triangle.getSidesLength().join(', ')}`);
```

## API Documentation
### Circle
Constructor
```ts
new Circle(radius: number)
```
* radius: The radius of the circle.

Methods
* getArea(): Promise<number>: Calculates the area of the circle.
* getCircumference(): Promise<number>: Calculates the circumference of the circle.
* getName(): string: Returns the name of the shape, which is 'Circle'.
* getRadius(): number: Returns the radius of the circle.
* getDiameter(): Promise<number>: Calculates the diameter of the circle.

### Rectangle
Constructor
```ts
new Rectangle(width: number, height: number)
```
* width: The width of the rectangle.
* height: The height of the rectangle.

Methods
* getArea(): Promise<number>: Calculates the area of the rectangle.
* getPerimeter(): Promise<number>: Calculates the perimeter of the rectangle.
* getName(): string: Returns the name of the shape, which is 'Rectangle'.
* getWidth(): number: Returns the width of the rectangle.
* getHeight(): number: Returns the height of the rectangle.

### Triangle
Constructor
```ts
new Triangle(sideA: number, sideB: number, sideC: number)
```
* sideA: The length of the first side.
* sideB: The length of the second side.
* sideC: The length of the third side.

Methods
* getArea(): Promise<number>: Calculates the area of the triangle using Heron's formula.
* getPerimeter(): Promise<number>: Calculates the perimeter of the triangle.
* getName(): string: Returns the name of the shape, which is 'Triangle'.
* getSidesLength(): number[]: Returns an array with the lengths of the triangle's sides.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request with any improvements or fixes. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.
