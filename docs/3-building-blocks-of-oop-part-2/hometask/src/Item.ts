import { Comparable } from './Comparable';

let id = 0;
let counter = 0;

export abstract class Item implements Comparable<Item> {
    private id: number;
    value: number;
    weight: number;
    name: string;

    constructor(name: string, value: number, weight: number) {
        this.name = name;
        this.value = value;
        this.weight = weight;
        this.id = id;
        id++;
        counter++;
    }

    use() :void {}

    static get numberOfItems(): number {
        return counter;
    }

    public compareTo(other: Item): number {
        if (this.value > other.value) {
            return 1;
        } else if (this.value < other.value) {
            return -1;
        } else {
            return this.compareStringTo(other.name);
        }
    }

    compareStringTo(name) {
        return this.name.toLocaleLowerCase() > name.toLocaleLowerCase() ? 1 : -1;
     }

    toString(): string {
        return  `${this.name} − Value: ${this.value}, Weight: ${this.weight}`;
    }

    getId(): number {
        return this.id;
    }

    getValue(): number {
        return this.value;
    }

    getName(): string {
        return this.name;
    }

    getWeight(): number {
        return this.weight;
    }

    setValue(price: number): void {
        this.value = price;
    }

    setName(name: string): void {
        this.name = name;
    }
    
    setWeight(weight: number): void {
        this.weight = weight;
    }

    reset(): void {
        counter = 0;
    }
}
