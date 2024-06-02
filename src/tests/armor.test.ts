import { Vertex } from "../Vertex";
import * as assert from "node:assert";

const testAttack = {
    base: 999,
    dice: 1,
    roll: 1,
    type: "Chaos",
    cooldown: 1.000
} as const;

describe("test", () => {
    test("xdd", () => {
        const results = [
            new Vertex(testAttack, { type: "Medium", value: -1 }).calculate(),
            new Vertex(testAttack, { type: "Medium", value: 0 }).calculate(),
            new Vertex(testAttack, { type: "Medium", value: 1 }).calculate(),
        ];

        assert.strictEqual(results[0].avg, 1060);
        assert.strictEqual(results[1].avg, 1000);
        assert.strictEqual(results[2].avg, 943);
    });
});
