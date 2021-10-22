const substract = require("../src/substract");

test("properly substracting two numbers", () => {
  expect(substract(2, 2)).toBe(0);
});
