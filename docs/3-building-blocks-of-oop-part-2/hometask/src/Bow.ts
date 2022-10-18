import { Weapon } from './Weapon';
export class Sword extends Weapon {
    constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('bow', baseDamage, baseDurability, value, weight);
    }

    polish(): void{
        this.durabilityModifier += Weapon.MODIFIER_CHANGE_RATE;
        if (this.isBroken()) {
            this.durabilityModifier = 1 - this.baseDurability;
        }
    }
}