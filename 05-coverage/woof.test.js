const woof = require("./woof");

test.only("should return no. of woofs", () => {
    const result = woof("oh herro");
    expect(result).toBe("8woof!");
});

test("should return null when not given a string", () => {
    expect(() => woof()).toThrow("MUST");
});

test.skip("should return null when not given a string", () => {
    expect(() => woof()).toThrow("MUST");
});

test.todo("should not allow numbers to be passed");
