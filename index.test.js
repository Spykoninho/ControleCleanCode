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

describe("Multiple rolls", ()=>{
    it("Should return Brelan + Full", ()=>{
        expect(analyzeDiceRolls([
            [1, 1, 1, 4, 6],
            [3, 3, 3, 6, 6]
        ])).toBe(28+30)
    })

    it("Should return Lucky roll + Grande suite + YAMS", ()=>{
        expect(analyzeDiceRolls([
            [1, 2, 3, 5, 6],
            [2, 3, 4, 5, 6],
            [4, 4, 4, 4, 4]
        ])).toBe(17+40+50)
    })

    it("Should return 3 YAMS", ()=>{
        expect(analyzeDiceRolls([
            [6, 6, 6, 6, 6],
            [2, 2, 2, 2, 2],
            [4, 4, 4, 4, 4]
        ])).toBe(50*3)
    })

    it("Should return multiple lucky rolls", ()=>{
        expect(analyzeDiceRolls([
            [1, 4, 4, 5, 6],
            [1, 2, 3, 5, 6],
            [2, 3, 4, 1, 6]
        ])).toBe(20 + 17 + 16)
    })

    it("Should return Carré * 2 + Brelan", ()=>{
        expect(analyzeDiceRolls([
            [3, 3, 3, 3, 5],
            [2, 2, 2, 2, 6],
            [4, 4, 4, 1, 5]
        ])).toBe(35*2 + 28)
    })
})