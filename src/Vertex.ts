import * as ExpansionData from "./data/damage-multipliers.json";
enum GameExpansion {
    FrozenThrone = "tft",
    ReignOfChaos = "roc"
}

export type ArmorType = "Unarmored" | "Light" | "Medium" | "Heavy" | "Fortified" | "Hero" | "Divine";
export type AttackType = "Normal" | "Piercing" | "Hero" | "Siege" | "Magic" | "Chaos" | "Spell";

export type Attack = {
    type: AttackType;
    base: number;
    dice: number;
    roll: number;
    cooldown: number;
};
export type Defence = {
    value: number;
    type: ArmorType;
};

type Multiplier = [AttackType, ArmorType, number];
const MULTI_TFT = ExpansionData.tft as Multiplier[];
const MULTI_ROC = ExpansionData.roc as Multiplier[];

const minClamp = (value: number) => (value <= 1) ? 1 : value;

export class Vertex {
    readonly bonusTable;
    readonly defence: Defence;
    readonly attack: Attack;

    constructor (attack: Attack, defence: Defence) {
       this.attack = attack;
       this.defence = defence;
       this.bonusTable = MULTI_TFT;
    }

    calculate () {
        const armorMultiplier = Vertex.armorMultiplier(this.defence.value);
        const attackValues = Vertex.attackFormula(this.attack);

        const bonusRow = this.bonusTable.find(i => i[0] === this.attack.type && i[1] === this.defence.type);
        const multi = bonusRow![2];

        const min = minClamp(Math.floor(attackValues.min * multi * armorMultiplier));
        const max = minClamp(Math.floor(attackValues.max * multi * armorMultiplier));
        const avg = (min + max) / 2;
        const dps = avg / this.attack.cooldown;

        return { min, max, avg, dps };
    }

    static armorMultiplier (armor: number): number {
        if (armor >= 0) {
            return 1 - ((armor * 0.06) / (1 + 0.06 * armor));
        }
        else {
            return 2 - (0.94 ** (-armor));
        }
    }

    static attackFormula (attack: Attack) {
        const min = attack.base + (attack.dice); // Rolling X dice, all landing on 1
        const max = attack.base + (attack.dice * attack.roll); // Rolling X dice, all landing on max roll
        return { min, max };
    }
}
