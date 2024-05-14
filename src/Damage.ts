import { Attack, Type as AttackType } from "./Attack";
import { Armor, Type as ArmorType } from "./Armor";
import ExpansionData from "./multipliers.json";

enum GameExpansion {
    FrozenThrone = "tft",
    ReignOfChaos = "roc"
}

type Multiplier = [AttackType, ArmorType, number];
const MULTI_TFT = ExpansionData.tft as Multiplier[];
const MULTI_ROC = ExpansionData.roc as Multiplier[];

export class Damage {
    readonly attack: Attack;
    readonly armor: Armor;

    constructor (attack: Attack, armor: Armor) {
        this.attack = attack;
        this.armor = armor;
    }

    calculate (expansion: GameExpansion = GameExpansion.FrozenThrone): number {
        const table = (expansion === GameExpansion.FrozenThrone) ? MULTI_TFT : MULTI_ROC;
        const row = table.find(i => i[0] === this.attack.type && i[1] === this.armor.type);
        const multi = row![2];

        const min = this.attack.dice * this.attack.roll
        const preArmorDamage =

        return 0;
    }
}
