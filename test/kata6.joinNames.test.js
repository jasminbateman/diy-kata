const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(["Bart", "Lisa", "Maggie"])).toBe('Bart, Lisa & Maggie');
    expect(joinNames(["Monica", "Rachel", "Phoebe", "Ross", "Chandler", "Joey"])).toBe('Monica, Rachel, Phoebe, Ross, Chandler & Joey');
    expect(joinNames(["Michael", "Dwight", "Angela", "Jim", "Pam"])).toBe('Michael, Dwight, Angela, Jim & Pam');
  });
});
