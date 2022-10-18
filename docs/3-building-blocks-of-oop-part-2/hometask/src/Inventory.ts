import { Item } from './Item';
import { ItemComparator } from './ItemComparator'
export class Inventory {
    items: Item[];

    constructor(items: Item[]) {
        this.items = items;
    }

    addItem(item: Item): void {
        this.items.push(item);
    }

    sort(): void;
    sort(comparator: ItemComparator): void;
    sort(comparator?: ItemComparator) {
        if (comparator) {
            this.items.sort(comparator.compare);
        } else {
            this.items.sort((a: Item, b: Item) => {
                return a.value - b.value;
            })
        }
    }

    toString(): string {
        return this.items.join(', ');
    }
}