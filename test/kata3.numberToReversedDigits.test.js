const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(123)).toEqual([3, 2, 1]);
    expect(numberToReversedDigits(2389)).toEqual([9, 8, 3, 2]);
  });
});
