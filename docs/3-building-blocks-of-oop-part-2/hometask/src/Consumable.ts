import { Item } from './Item';

export class Consumable extends Item {
    consumed: boolean = false;
    spoiled: boolean;

    constructor(name: string, value: number, weight: number, spoiled: boolean) {
        super(name, value, weight);
        this.spoiled = spoiled;
    }

    eat(): string {
        return `You eat the ${this.name}.`;
    }

    use(): string {
        if (!this.consumed && !this.spoiled) {
            return this.eat(); 
        } else if (this.consumed && this.spoiled){
            return `You eat the ${this.name}.\n you feel sick.`;
        } else if (this.consumed) {
            return `You eat the ${this.name}.`;
        } else {
            return 'You feel sick.';
        }
    }

    isConsumed(): boolean {
        return this.consumed;
    }

    setConsumed(consumed: boolean): void {
        this.consumed = consumed;
    }
}