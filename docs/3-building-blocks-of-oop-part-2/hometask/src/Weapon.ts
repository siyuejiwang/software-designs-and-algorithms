import { Item } from './Item';
export abstract class Weapon extends Item {
    baseDamage: number;
    damageModifier: number;
    baseDurability: number;
    durabilityModifier: number;
    static MODIFIER_CHANGE_RATE: number = 0.05;

    constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(name, value, weight);
        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
    }

    getDamage(): number{
        return Number((this.baseDamage + this.damageModifier).toFixed(2));
    }

    getDurability(): number {
        return Number(((this.baseDurability + this.durabilityModifier) * 100).toFixed(2));
    }

    toString(): string {
        return `${this.name} − Value: ${this.value}, Weight: ${this.weight}, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}%"`;
    }

    use(): string {
        if (this.isBroken()) {
            return `You can't use the ${this.name}, it is broken.`;
        } else {
            this.durabilityModifier += Weapon.MODIFIER_CHANGE_RATE;
            if (this.isBroken()) {
                return `You use the ${this.name}, dealing ${this.getDamage()} points of damage.\n The hammer breaks.`;
            } else {
                return `You use the ${this.name}, dealing ${this.getDamage()} points of damage.`;
            }
        }
    }

    isBroken() {
        return this.getDurability() > 100;
    }
}