const module = require('./jest-practice');

test('Capitlizes the first letter of the string', () => {
    expect(module.capitalize("success")).toBe("Success");
});

test('Reverses the string input', () => {
    expect(module.reverseString("success")).toBe("sseccus");
})

test("Adds an input", () => {
    expect(module.calculator.add(5,10)).toBe(15);
});

test("Subtracts an input", () => {
    expect(module.calculator.subtract(5,2)).toBe(3);
});

test("Divides an input", () => {
    expect(module.calculator.divide(16, 4)).toBe(4);
});

test("Multiplies an input", () => {
    expect(module.calculator.multiply(4,2)).toBe(8);
});

test("Adds an input", () => {
    expect(module.analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
});