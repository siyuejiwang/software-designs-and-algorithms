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
    distance(point: Point);
    distance(x: number, y: number);
    distance(pointOrX?: Point | number, y?: number) {
        if (typeof pointOrX === 'number' && typeof y === 'number') {
            return this.calDisFromPoint(pointOrX, y);
        } else if (pointOrX instanceof Point) {
            return this.calDisFromPoint(pointOrX.x, pointOrX.y);
        } else {
            return this.calDisFromPoint(0, 0);
        }
    }

    calDisFromPoint(x: number, y: number) {
        return Number(Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2)).toFixed(2));
    }
}