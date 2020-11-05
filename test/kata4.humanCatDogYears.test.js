const { humanCatDogYears } = require("../src");

describe ("humanCatDogYears", () => {
    it("returns an array of human, cat and dog years when passed human years", () => {
        expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
        expect(humanCatDogYears(24)).toEqual([24, 112, 134]);

    });

    it("returns error message if not a number", () => {
        expect(humanCatDogYears("hello")).toEqual("this is not a number");
    })

    it("returns error if number is below 1", () => {
        expect(humanCatDogYears(-2)).toEqual("please enter a valid number1");
    })
});

// Look Ma, no handlebars!!!
