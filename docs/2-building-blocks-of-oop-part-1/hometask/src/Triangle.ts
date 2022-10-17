import { Shape } from './Shape'
import { Point } from './Point';

export class Triangle extends Shape {
  private triangleType: string;

  constructor(pointA: Point, pointB: Point, pointC: Point);
  constructor(pointA: Point, pointB: Point, pointC: Point, color: string, filled: boolean);
  constructor(pointA: Point, pointB: Point, pointC: Point, color?: string, filled?: boolean) {
    if (typeof color === 'string' && typeof filled === 'boolean') {
      super([pointA, pointB, pointC], color, filled);
    } else {
      super([pointA, pointB, pointC]);
    }
    this.identifyTriangleType();
  }

  identifyTriangleType() {
    const sideLengthArray: number[] = [];
    for (let i = 0; i < this.points.length; i++) {
      const prevPoint = i ? this.points[i - 1] : this.points[this.points.length - 1];
      const sideLength = this.points[i].distance(prevPoint);
      if (!sideLengthArray.includes(sideLength)) {
        sideLengthArray.push(sideLength);
      }
    }
    this.triangleType = sideLengthArray.length === 2 ? 'isosceles triangle' : sideLengthArray.length === 1 ? 'equilateral triangle' : 'scalene triangle';
  }

  toString() {
    const pointsStrArr: string[] = this.points.map((point: Point, i: number) => `v${i + 1}=${point}`);
    return `Triangle[${pointsStrArr.join(',')}]`;
  }
  
  getType() {
    return this.triangleType;
  }
}
