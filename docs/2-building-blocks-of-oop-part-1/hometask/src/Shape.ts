import { Point } from './Point';
export abstract class Shape {
  private color: string;
  private filled: boolean;
  points: Point[];
  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length < 3) {
      throw new Error('shape has least 3 points');
    }
    this.points = points;
    this.color = color || 'green';
    this.filled = typeof filled === 'boolean' ? filled : true;
  }
  toString() {
    const pointsStrArr: string[] = [];
    for (let point of this.points) {
      pointsStrArr.push(point.toString());
    }
    return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${pointsStrArr.join(', ')}.`
  }
  getPerimeter() {
    let perimerter = 0;
    for (let i = 0; i < this.points.length; i++) {
      const prevPoint = i ? this.points[i-1] : this.points[this.points.length - 1];
      perimerter += this.points[i].distance(prevPoint);
    }
    return perimerter;
  }
  abstract getType(): string;
}
