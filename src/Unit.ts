export type Type = "Ground" | "Air" | "Structure" | "Ward";
export type Race = "Human" | "Orc" | "Night elf" | "Undead" | "Neutral";

type Meta = {
    ignoresUpgrades: boolean;
}

export class Unit {
    readonly type: Type;
    readonly hitpoints: number;
    readonly meta: Meta;

    constructor () {

    }
}
