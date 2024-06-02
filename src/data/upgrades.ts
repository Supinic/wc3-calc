import { Race } from "../Unit";

export type Type = "armor" | "melee armor" | "ranged armor" | "melee attack" | "ranged attack";
export type Upgrade = {
    name: string;
    race: Race;
    type: Type;
    tier: 1 | 2 | 3;
};

export const upgrades: Upgrade[] = [
    { name: "Iron Forged Swords", race: "Human", type: "melee attack", tier: 1 },
    { name: "Steel Forged Swords", race: "Human", type: "melee attack", tier: 2 },
    { name: "Mithril Forged Swords", race: "Human", type: "melee attack", tier: 3 },

    { name: "Black Gunpowder", race: "Human", type: "ranged attack", tier: 1 },
    { name: "Refined Gunpowder", race: "Human", type: "ranged attack", tier: 2 },
    { name: "Imbued Gunpowder", race: "Human", type: "ranged attack", tier: 3 },

    { name: "Iron Plating", race: "Human", type: "melee armor", tier: 1 },
    { name: "Steel Plating", race: "Human", type: "melee armor", tier: 2 },
    { name: "Mithril Plating", race: "Human", type: "melee armor", tier: 3 },

    { name: "Studded Leather Armor", race: "Human", type: "ranged armor", tier: 1 },
    { name: "Reinforced Leather Armor", race: "Human", type: "ranged armor", tier: 2 },
    { name: "Dragonhide Armor", race: "Human", type: "ranged armor", tier: 3 },

    // ---

    { name: "Strength of the Wild", race: "Night elf", type: "melee attack", tier: 1 },
    { name: "Improved Strength of the Wild", race: "Night elf", type: "melee attack", tier: 2 },
    { name: "Advanced Strength of the Wild", race: "Night elf", type: "melee attack", tier: 3 },

    { name: "Strength of the Moon", race: "Night elf", type: "ranged attack", tier: 1 },
    { name: "Improved Strength of the Moon", race: "Night elf", type: "ranged attack", tier: 2 },
    { name: "Advanced Strength of the Moon", race: "Night elf", type: "ranged attack", tier: 3 },

    { name: "Reinforced Hides", race: "Night elf", type: "melee armor", tier: 1 },
    { name: "Improved Reinforced Hides", race: "Night elf", type: "melee armor", tier: 2 },
    { name: "Advanced Reinforced Hides", race: "Night elf", type: "melee armor", tier: 3 },

    { name: "Moon Armor", race: "Night elf", type: "ranged armor", tier: 1 },
    { name: "Improved Moon Armor", race: "Night elf", type: "ranged armor", tier: 2 },
    { name: "Advanced Moon Armor", race: "Night elf", type: "ranged armor", tier: 3 },

    // ---

    { name: "Steel Melee Weapons", race: "Orc", type: "melee attack", tier: 1 },
    { name: "Thorium Melee Weapons", race: "Orc", type: "melee attack", tier: 2 },
    { name: "Arcanite Melee Weapons", race: "Orc", type: "melee attack", tier: 3 },

    { name: "Steel Ranged Weapons", race: "Orc", type: "ranged attack", tier: 1 },
    { name: "Thorium Ranged Weapons", race: "Orc", type: "ranged attack", tier: 2 },
    { name: "Arcanite Ranged Weapons", race: "Orc", type: "ranged attack", tier: 3 },

    { name: "Steel Armor", race: "Orc", type: "armor", tier: 1 },
    { name: "Thorium Armor", race: "Orc", type: "armor", tier: 2 },
    { name: "Arcanite Armor", race: "Orc", type: "armor", tier: 3 },

    // ---

    { name: "Unholy Strength", race: "Undead", type: "melee attack", tier: 1 },
    { name: "Improved Unholy Strength", race: "Undead", type: "melee attack", tier: 2 },
    { name: "Advanced Unholy Strength", race: "Undead", type: "melee attack", tier: 3 },

    { name: "Creature Attack", race: "Undead", type: "ranged attack", tier: 1 },
    { name: "Improved Creature Attack", race: "Undead", type: "ranged attack", tier: 2 },
    { name: "Advanced Creature Attack", race: "Undead", type: "ranged attack", tier: 3 },

    { name: "Unholy Armor", race: "Undead", type: "melee armor", tier: 1 },
    { name: "Improved Unholy Armor", race: "Undead", type: "melee armor", tier: 2 },
    { name: "Advanced Unholy Armor", race: "Undead", type: "melee armor", tier: 3 },

    { name: "Creature Carapace", race: "Undead", type: "ranged armor", tier: 1 },
    { name: "Improved Creature Carapace", race: "Undead", type: "ranged armor", tier: 2 },
    { name: "Advanced Creature Carapace", race: "Undead", type: "ranged armor", tier: 3 }
];
