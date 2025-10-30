import { describe, expect, it } from "vitest";
import { analyzeDiceRolls, calculLuckyRollScore, countNumberOccurencesInArray, hasBrelan, hasPair, isCarre, isFull, isGrandeSuite, isYams } from ".";

describe("Sample test", ()=>{
    it("Should pass", ()=>{
        expect(true).toBe(true);
    })
})

describe("Integration tests", ()=>{

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
})

describe("Unit tests", ()=>{
    it("Should count number occurences in array", ()=>{
        const array = [1, 2, 3, 4, 2, 2, 5];
        expect(countNumberOccurencesInArray(array, 2)).toBe(3);
        expect(countNumberOccurencesInArray(array, 4)).toBe(1);
        expect(countNumberOccurencesInArray(array, 6)).toBe(0);
    })

    it("Should detect grande suite", ()=>{
        expect(isGrandeSuite([1, 2, 3, 4, 5])).toBe(true);
        expect(isGrandeSuite([2, 3, 4, 5, 6])).toBe(true);
        expect(isGrandeSuite([1, 2, 3, 4, 6])).toBe(false);
    })

    it("Should detect Brelan", ()=>{
        expect(hasBrelan([1, 1, 1, 4, 5])).toBe(true);
        expect(hasBrelan([2, 2, 3, 2, 6])).toBe(true);
        expect(hasBrelan([3, 3, 4, 5, 6])).toBe(false);
    })

    it("Should detect Pair", ()=>{
        expect(hasPair([1, 1, 3, 4, 5])).toBe(true);
        expect(hasPair([2, 3, 4, 5, 5])).toBe(true);
        expect(hasPair([3, 4, 5, 6, 1])).toBe(false);
    })

    it("Should detect Full", ()=>{
        expect(isFull([2, 2, 2, 5, 5])).toBe(true);
    })

    it("Should detect Carre", ()=>{
        expect(isCarre([3, 3, 3, 3, 6])).toBe(true);
    })

    it("Should detect luck roll score", ()=>{
        expect(calculLuckyRollScore([1, 2, 3, 4, 6])).toBe(16);
    })

    it("Should detect YAMS", ()=>{
        expect(isYams([5, 5, 5, 5, 5])).toBe(true);
    })
})

describe("Bonus", ()=>{
    it("Should not count multiple same combinations", ()=>{
        expect(analyzeDiceRolls([
            [1, 1, 1, 2, 2],
            [1, 1, 1, 2, 2],
            [1, 1, 1, 2, 2],
        ])).toBe(30 + 28 + 7) // Grande suite + Full + Carre + YAMS
    })
})