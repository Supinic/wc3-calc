import { Type as UnitType } from "./Unit";
export type Type = "Normal" | "Piercing" | "Hero" | "Siege" | "Magic" | "Chaos" | "Spell";

type BuildData = {
    type: Type;
    base: number;
    dice: number;
    roll: number;
    cooldown: number;
    targets: UnitType[];
};

export class Attack {
    readonly type: Type;
    readonly base: number;
    readonly dice: number;
    readonly roll: number;
    readonly cooldown: number;
    readonly targets: UnitType[];

    constructor (data: BuildData) {
        this.type = data.type;
        this.base = data.base;
        this.dice = data.dice;
        this.roll = data.roll;
        this.cooldown = data.cooldown;
        this.targets = data.targets ?? ["Ground", "Structure"];
    }

    formula () {
        const min = this.base + (this.dice); // Rolling X dice, all landing on 1
        const max = this.base + (this.dice * this.roll); // Rolling X dice, all landing on max roll
        const avg = (min + max) / 2;
        const dps = avg / this.cooldown;

        return { min, max, avg, dps };
    }
}
