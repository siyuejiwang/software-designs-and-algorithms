import { Shape } from './Shape'
import { Point } from './Point';

export class Triangle extends Shape {
  constructor(pointA: Point, pointB: Point, pointC: Point);
  constructor(pointA: Point, pointB: Point, pointC: Point, color: string, filled: boolean);
  constructor(pointA: Point, pointB: Point, pointC: Point, color?: string, filled?: boolean) {
    if (typeof color === 'string' && typeof filled === 'boolean') {
      super([pointA, pointB, pointC], color, filled);
    } else {
      super([pointA, pointB, pointC])
    }
  }

  toString() {
    let pointsStrArr: string[] = []
    for (let i = 0; i < this.points.length; i++) {
      pointsStrArr.push(`v${i + 1}=${this.points[i].toString()}`);
    }
    return `Triangle[${pointsStrArr.join(',')}]`;
  }
  
  getType() {
    const sideLengthArray: number[] = [];
    for (let i = 0; i < this.points.length; i++) {
      const prevPoint = i
        ? this.points[i - 1]
        : this.points[this.points.length - 1];
      const sideLength = this.points[i].distance(prevPoint);
      if (!sideLengthArray.includes(sideLength)) {
        sideLengthArray.push(sideLength);
      }
    }
    return sideLengthArray.length === 2 ? 'isosceles triangle' : sideLengthArray.length === 1 ? 'equilateral triangle' : 'scalene triangle';
  }
}
