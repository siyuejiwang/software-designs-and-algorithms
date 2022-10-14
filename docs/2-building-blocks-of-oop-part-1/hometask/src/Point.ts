export class Point {
    x: number;
    y: number;
    constructor();
    constructor(x: number, y: number);
    constructor(x?: number, y?: number) {
        this.x = x || 0;
        this.y = y || 0;
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
    distance();
    distance(other: Point);
    distance(x: number, y: number);
    distance(otherOrX?: Point | number, y?: number) {
        if (typeof otherOrX === 'number' && typeof y === 'number') {
            return Number(Math.sqrt(Math.pow(this.x - otherOrX, 2) + Math.pow(this.y - y, 2)).toFixed(2));
        } else if (otherOrX instanceof Point) {
            return Number(Math.sqrt(Math.pow(this.x - otherOrX.x, 2) + Math.pow(this.y - otherOrX.y, 2)).toFixed(2));
        } else {
            return Number(Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)).toFixed(2));
        }
    }
}