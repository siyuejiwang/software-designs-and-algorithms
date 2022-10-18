import { Weapon } from './Weapon';
export class Sword extends Weapon {
    constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('sword', baseDamage, baseDurability, value, weight);
    }

    polish(): void{
        this.damageModifier += Weapon.MODIFIER_CHANGE_RATE;
        if (this.damageModifier > 0.25 * this.baseDamage) {
            this.damageModifier = 0.25 * this.baseDamage;
        }
    }
}