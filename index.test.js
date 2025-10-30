import { describe, expect, it } from "vitest";
import { analyzeDiceRolls } from ".";

describe("Sample test", ()=>{
    it("Should pass", ()=>{
        expect(true).toBe(true);
    })
})

describe("Lucky roll", ()=>{
    it("Should return 17", ()=>{
        expect(analyzeDiceRolls([
            [1, 2, 3, 5, 6]
        ])).toBe(17)
    })
})