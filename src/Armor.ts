export type Type = "Unarmored" | "Light" | "Medium" | "Heavy" | "Fortified" | "Hero" | "Divine";

type BuildData = {
    type: Type;
    base: number;
};

export class Armor {
    readonly type: Type;
    readonly base: number;

    constructor (data: BuildData) {
        this.type = data.type;
        this.base = data.base;
    }

    formula (bonus: number = 0): number {
        const total = this.base + bonus;
        if (total >= 0) {
            return ((total * 0.06) / (1 + 0.06 * total));
        }
        else {
            return 2 - (0.94 ** (-total));
        }
    }
}
