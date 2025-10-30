import { describe, expect, it } from "vitest";
import { analyzeDiceRolls } from ".";

describe("Sample test", ()=>{
    it("Should pass", ()=>{
        expect(true).toBe(true);
    })
})

describe("One roll", ()=>{
    describe("Lucky roll", ()=>{
        it("Should return 17", ()=>{
            expect(analyzeDiceRolls([
                [1, 2, 3, 5, 6]
            ])).toBe(17)
        })
    })

    describe("Brelan", () => {
        it("Should return 28", () => {
            expect(analyzeDiceRolls([
                [4, 4, 4, 5, 6]
            ])).toBe(28)
        })
    })

    describe("Carré", () => {
        it("Should return 35", () => {
            expect(analyzeDiceRolls([
                [2, 5, 5, 5, 5]
            ])).toBe(35)
        })
    })

    describe("Full", () => {
        it("Should return 30", () => {
            expect(analyzeDiceRolls([
                [3, 3, 3, 6, 6]
            ])).toBe(30)
        })
    })

    describe("Grande suite", ()=>{
        it("Should return 40", ()=>{
            expect(analyzeDiceRolls([
                [2, 3, 4, 5, 6]
            ])).toBe(40)
        })
    })

    describe("YAMS", ()=>{
        it("Should return 50", ()=>{
            expect(analyzeDiceRolls([
                [1, 1, 1, 1, 1]
            ])).toBe(50)
        })
    })
})
