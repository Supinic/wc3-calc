import { Attack } from "./Attack";
import { Armor } from "./Armor";

export type Type = "Ground" | "Air" | "Structure" | "Ward";
type Race = "Human" | "Orc" | "Night elf" | "Undead" | "Neutral";

type Meta = {
    ignoresUpgrades: boolean;
}

export class Unit {
    readonly attack: Attack;
    readonly armor: Armor;
    readonly type: Type;
    readonly hitpoints: number;
    readonly meta: Meta;

    constructor () {

    }
}
