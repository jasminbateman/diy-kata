const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns yes when passed a true boolean", () => {
    expect(booleanToWord(5)).toBe('Yes')
    expect(booleanToWord('false')).toBe('Yes')
  });

  it("returns no when passed a false boolean", () => {
    expect(booleanToWord(0)).toBe('No')
    expect(booleanToWord('')).toBe('No')
  });

});
