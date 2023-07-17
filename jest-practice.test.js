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