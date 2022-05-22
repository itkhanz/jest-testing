const woof = require("./woof");

test("should return no. of woofs", () => {
    const result = woof("oh herro");
    expect(result).toBe("8woof!");
});

test("should return null when not given a string", () => {
    //const result = woof();
    //expect(result).toBeNull();

    expect(() => woof()).toThrow("MUST");
});
